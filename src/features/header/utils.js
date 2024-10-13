import { storeToken } from '../../api/utils';
import { postLogin, postSignUp } from "../../api/auth";

async function login(username, password) {
  console.log("attempt log in", username, password);
  try {
    const res = await postLogin(username, password);
    const resJson = await res.json();
    console.log("log in response", resJson);

    storeToken(resJson.jwt);
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

async function signUp(username, password, confirmPassword) {
  console.log("attempt sign up", username, password, confirmPassword);
  try {
    const res = await postSignUp(username, password, confirmPassword);
    const resJson = await res.json();
    console.log("sign up response", resJson);
    return resJson
  } catch (error) {
    console.error(error);
  }
}

export { login, signUp };
