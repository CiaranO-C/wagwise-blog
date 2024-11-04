import { useContext, useEffect, useRef, useState } from "react";
import PasswordField from "./PasswordField";
import styled from "styled-components";
import { ModalContext } from "../../../app/providers/ModalProvider.jsx";
import { login, signUp } from "../utils.js";
import { AuthContext } from "../../../app/providers/AuthProvider.jsx";
import {
  validateConfirmPassword,
  validatePassword,
  validateTruthyForm,
  validateUsername,
} from "./validate.js";

function AuthForm() {
  const { setUser } = useContext(AuthContext);
  const { modal: formType, setModal, setAnimate } = useContext(ModalContext);
  const focusRef = useRef(null);
  const initialMount = useRef(true);
  const formRef = useRef(null);
  const submitRef = useRef(null);
  const guestRef = useRef(null);
  const validateRef = useRef({});
  const isSignUp = formType === "signUp";
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  //if sign up / sign in toggled wipe inputs clean
  useEffect(() => {
    if (!initialMount.current) {
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    } else {
      initialMount.current = false;
    }
  }, [formType]);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, [formType]);

  const validators = {
    username: handleUsername,
    password: handlePassword,
    confirmPassword: handleConfirmPassword,
  };

  const authUtils = {
    signIn: handleSignIn,
    signUp: handleSignUp,
  };

  async function handleSignIn() {
    const userLogin = await login(formData.username, formData.password);
    console.log(userLogin);

    if (userLogin?.error) {
      return setErrors((prev) => ({ ...prev, form: userLogin.error }));
    }
    setUser(userLogin.user);
    setModal(false);
    setAnimate(true);
  }

  async function handleSignUp() {
    const newUser = await signUp(
      formData.username,
      formData.password,
      formData.confirmPassword,
    );
    console.log(newUser);

    if (newUser?.errors) {
      return setErrors((prev) => ({ ...prev, form: newUser.errors[0].msg }));
    }

    setModal("signIn");
  }

  function checkErrors() {
    const errorValues = Object.values(errors);
    return errorValues.some((err) => err);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!submitRef.current) submitRef.current = true;

    const hasEmpties = checkForEmpties();
    const hasErrors = checkErrors();

    if (hasEmpties || hasErrors) {
      console.log("Form Denied!");
      return null;
    }

    await authUtils[formType]();
  }

  function checkForEmpties() {
    const error = validateTruthyForm(isSignUp, formRef.current);
    setErrors((prev) => ({ ...prev, form: error }));
    return Boolean(error);
  }

  function handlePassword(password) {
    const error = validatePassword(password);
    setErrors((prev) => ({ ...prev, password: error }));
    return Boolean(error);
  }

  function handleConfirmPassword(confirmPassword) {
    const error = validateConfirmPassword(formData.password, confirmPassword);
    setErrors((prev) => ({ ...prev, confirmPassword: error }));
    return Boolean(error);
  }

  function handleUsername(username) {
    const error = validateUsername(username);
    setErrors((previous) => ({ ...previous, username: error }));
    return Boolean(error);
  }

  function toggleFlag(id) {
    const bool = Boolean(validateRef.current?.[id]);
    validateRef.current = { ...validateRef.current, [id]: !bool };
  }

  function handleFormData(field, value) {
    setFormData({ ...formData, [field]: value });
  }

  function handleBlur({ target }) {
    const id = target.id;
    const value = target.value;

    if (!errors[id] && value) {
      const error = validators[id](value);

      if (error) toggleFlag(id);
    } else if (!value) {
      removeError(id);
    }
  }

  function removeError(id) {
    setErrors((prev) => ({ ...prev, [id]: null }));
  }

  function handleChange({ target }) {
    const { id, value } = target;
    //only re-validate flagged sign up fields
    if (isSignUp && validateRef.current[id]) validators[id](value);
    //only re-validate form if submit attempted
    if (submitRef.current) checkForEmpties();
    handleFormData(id, value);
  }

  function handleGuest() {
    setFormData({ username: "Guest", password: "guestPass1" });
    setErrors({});
    setTimeout(() => {
      if (guestRef.current) {
        guestRef.current.click();
      }
    }, 0);
  }

  const submitText = isSignUp ? "Get started!" : "Sign in";
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input
        ref={focusRef}
        onChange={handleChange}
        onBlur={isSignUp ? handleBlur : null}
        value={formData.username}
        type="text"
        name="username"
        id="username"
      />
      <div className="error-container">
        {errors.username && <p className="error-message">{errors.username}</p>}
      </div>
      <PasswordField
        label="password"
        passwordData={formData.password}
        handlePassword={handleChange}
        handleBlur={handleBlur}
        inputId="password"
      />
      <div className="error-container">
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      {isSignUp && (
        <>
          <PasswordField
            label="confirm password"
            passwordData={formData.confirmPassword}
            handlePassword={handleChange}
            handleBlur={handleBlur}
            inputId="confirmPassword"
            isInvalid={
              formData.confirmPassword &&
              formData.confirmPassword !== formData.password
            }
          />
          <div className="error-container">
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>
        </>
      )}
      <button ref={guestRef} className="submit" type="submit">
        {submitText}
      </button>
      {!isSignUp && (
        <button className="submit" onClick={handleGuest}>
          Guest account
        </button>
      )}
      <div className="error-container">
        {errors.form && <p className="error-message">{errors.form}</p>}
      </div>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: clamp(225px, 50%, 400px);
  margin: 30px 0px;
  text-align: center;

  label {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  input {
    padding: 10px 30px;
    border: 0.75px solid #e9e9e9;
    border-radius: 10px;
    background-color: #e9e9e9;
    width: 100%;
    font-family: inherit;
    font-size: 1rem;
    letter-spacing: 0.5px;
    text-align: center;

    &:focus {
      outline: 0.75px solid black;
    }
  }

  .error-container {
    height: 15px;
  }

  .error-message {
    font-size: 0.8rem;
    color: red;
  }

  button {
    cursor: pointer;
    transition: 0.2s;

    &:active {
      transform: scale(1.1);
    }
  }

  .submit {
    background-color: black;
    border: none;
    color: white;
    width: 65%;
    padding: 12px;
    margin-top: 20px;
    border-radius: 25px;
    align-self: center;
  }
`;

export default AuthForm;
