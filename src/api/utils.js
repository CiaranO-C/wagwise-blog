function getToken() {
  const token = localStorage.getItem("accessToken");
  return token;
}

function storeToken(token) {
  localStorage.setItem("accessToken", token);
}

function deleteToken() {
  localStorage.removeItem("accessToken");
}

export { getToken, storeToken, deleteToken };
