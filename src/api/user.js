import { API_URL, getToken, storeRefreshToken, storeToken } from "./utils";

async function userLoader() {
  const { user: initialUser, status: initialStatus } = await getUser();
  let user = initialUser;
  // unauthorized - invalid token
  console.log("user loader status -> ", initialStatus);

  if (initialStatus === 401) {
    const refreshAccess = await refreshToken();

    if (refreshAccess) {
      const { user: refreshUser } = await getUser();
      user = refreshUser;
    } else {
      //null value for user will force login page
      return null;
    }
  }
  return user;
}

async function getUser() {
  try {
    const token = getToken();

    const res = await fetch(`${API_URL}/api/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const user = await res.json();
      return { user, status: res.status };
    }
    return { user: null, status: res.status };
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
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

async function updateLikes(articleId, like) {
  try {
    const token = localStorage.getItem("accessToken");
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
