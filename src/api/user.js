import { getToken, storeToken } from './utils';

async function userLoader() {
  const { user: initialUser, status: initialStatus } = await getUser();
  let user = initialUser;
  // unauthorized - invalid token
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
    
    const res = await fetch("https://wagwise-production.up.railway.app/api/user", {
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
    const res = await fetch("https://wagwise-production.up.railway.app/api/user/refresh-token", {
      credentials: "include",
    });
    if (!res.ok) return false;

    const { jwt } = await res.json();
    storeToken(jwt);
    return true;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to refresh access token");
  }
}

export { userLoader };
