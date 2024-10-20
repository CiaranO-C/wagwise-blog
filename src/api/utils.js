function getToken() {
  const token = localStorage.getItem("accessToken");
  return token;
}

function storeToken(token) {
  localStorage.setItem("accessToken", token);
}

function storeRefreshToken(token) {
  sessionStorage.setItem("refreshToken", token);
}

function deleteToken() {
  localStorage.removeItem("accessToken");
}

const API_URL = import.meta.env.VITE_API_URL;

export { getToken, storeToken, deleteToken, storeRefreshToken, API_URL };
