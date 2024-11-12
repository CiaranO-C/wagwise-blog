import { API_URL, storeRefreshToken, storeToken } from "./utils";

async function userLoader(signal, token) {
  const { user: initialUser, status: initialStatus } = await getUser(
    signal,
    token,
  );
  let user = initialUser;
  // unauthorized - invalid token

  if (initialStatus === 401) {
    const refreshAccess = await refreshToken();

    if (refreshAccess) {
      const { user: refreshUser } = await getUser(signal, token);
      user = refreshUser;
    } else {
      return null;
    }
  }
  return user;
}

async function getUser(signal, token) {
  try {
    const res = await fetch(`${API_URL}/api/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      signal,
    });

    if (res.ok) {
      const user = await res.json();
      return { user, status: res.status };
    }
    return { user: null, status: res.status };
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Aborted fetch User");
      return { user: null, status: null };
    } else {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }
}

async function refreshToken() {
  try {
    const res = await fetch(`${API_URL}/api/user/refresh-token`, {
      headers: {
        refresh: sessionStorage.getItem("refreshToken"),
      },
    });
    if (!res.ok) return false;
    //valid refresh responds with new access token
    const { jwt, refreshToken } = await res.json();
    storeToken(jwt);
    storeRefreshToken(refreshToken);
    return true;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to refresh access token");
  }
}

async function updateLikes(articleId, like, token) {
  try {
    const res = await fetch(`${API_URL}/api/user/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: articleId,
        like,
      }),
    });

    if (!res.ok) return { updated: false, error: res.status };

    const { updated } = await res.json();

    return { updated, error: null };
  } catch (error) {
    console.error(error);
  }
}

export { userLoader, updateLikes };
