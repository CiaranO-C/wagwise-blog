import { useContext, useState } from "react";
import PasswordField from "./PasswordField";
import styled from "styled-components";
import { ModalContext } from "../../app/provider";

function AuthForm() {
  const { modal: formType } = useContext(ModalContext);
  const [formData, setFormData] = useState({});

  function handleFormData({ target }) {
    const field = target.id;
    setFormData({ ...formData, [field]: target.value });
  }

  const submitText = formType === "signUp" ? "Get started!" : "Sign in";
  return (
    <Form action="">
      <label htmlFor="username">username</label>
      <input type="text" name="username" id="username" />
      <PasswordField
        label="password"
        passwordData={formData.password}
        handlePassword={handleFormData}
        inputId="password"
      />
      {formType === "signUp" && (
        <PasswordField
          label="confirm password"
          passwordData={formData.confirmPassword}
          handlePassword={handleFormData}
          inputId="confirmPassword"
          isInvalid={
            formData.confirmPassword &&
            formData.confirmPassword !== formData.password
          }
        />
      )}
      <button className="submit" type="submit">
        {submitText}
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 30px 0px;
  text-align: center;

  label {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    padding-right: 30px;
    border: 0.75px solid #e9e9e9;
    border-radius: 10px;
    background-color: #e9e9e9;
    width: 100%;

    &:focus {
      outline: 0.75px solid black;
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
