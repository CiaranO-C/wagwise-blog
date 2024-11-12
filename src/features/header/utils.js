import { storeRefreshToken, storeToken } from '../../api/utils';
import { postLogin, postSignUp } from "../../api/auth";

async function login(username, password) {
  try {
    const res = await postLogin(username, password);
    const resJson = await res.json();

    storeToken(resJson.jwt);
    storeRefreshToken(resJson.refreshToken);
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

async function signUp(username, password, confirmPassword) {
  try {
    const res = await postSignUp(username, password, confirmPassword);
    const resJson = await res.json();
    return resJson
  } catch (error) {
    console.error(error);
  }
}

export { login, signUp };
