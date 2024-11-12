import { jwtDecode } from "jwt-decode";

async function getToken(abortSignal) {
  let token = localStorage.getItem("accessToken");

  if (token && !isTokenExpired(token)) return { token, error: null };

  //token null or expired, check refresh token
  if (getRefreshToken()) {
    const isRefreshed = await refreshToken(abortSignal);
    if (isRefreshed) {
      token = localStorage.getItem("accessToken");
      return { token, error: null };
    }
  }
  //tokens invalid/couldn't be refreshed
  return { token: null, error: abortSignal?.aborted ? "aborted" : "badTokens" };
}

function isTokenExpired(token) {
  const { exp } = jwtDecode(token);
  // Get current time in seconds
  const currentTime = Math.floor(Date.now() / 1000);
  const isExpired = exp < currentTime;

  return isExpired;
}

function getRefreshToken() {
  const token = sessionStorage.getItem("refreshToken");
  const isExpired = token ? isTokenExpired(token) : null;

  if (isExpired || !token) return false;

  return token;
}

async function refreshToken(signal) {
  try {
    const token = sessionStorage.getItem("refreshToken");

    const res = await fetch(`${API_URL}/api/user/refresh-token`, {
      headers: {
        refresh: token,
      },
      signal,
    });
    if (!res.ok) {
      deleteTokens();
      return false;
    }

    const { jwt, refreshToken } = await res.json();
    storeToken(jwt);
    storeRefreshToken(refreshToken);
    return true;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Refresh token aborted");
    } else {
      console.error(error);
      throw new Error("Failed to refresh access token");
    }
  }
}

function storeToken(token) {
  localStorage.setItem("accessToken", token);
}

function storeRefreshToken(token) {
  sessionStorage.setItem("refreshToken", token);
}

function deleteTokens() {
  localStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
}

const API_URL = import.meta.env.VITE_API_URL;

export { getToken, storeToken, deleteTokens, storeRefreshToken, API_URL };
