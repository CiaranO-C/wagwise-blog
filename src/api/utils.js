function getToken() {
  const token = localStorage.getItem("accessToken");
  return token;
}

function storeToken(token) {
  localStorage.setItem("accessToken", token);
}

function storeRefreshToken(token) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString(); // 7 days
  document.cookie = `refreshToken=${token}; path=/; expires=${expires}; secure; SameSite=None;`;
}

function deleteToken() {
  localStorage.removeItem("accessToken");
}

const API_URL = import.meta.env.VITE_API_URL;

export { getToken, storeToken, deleteToken, storeRefreshToken, API_URL };
