import { API_URL } from './utils';

async function postLogin(username, password) {
  const response = await fetch(`${API_URL}/api/user/log-in`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      username,
      password,
    }),
  });
  return response;
}

async function postSignUp(username, password, confirmPassword) {
  const response = await fetch(`${API_URL}/api/user/sign-up`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      username,
      password,
      confirmPassword,
    }),
  });
  return response;
}

export { postLogin, postSignUp };
