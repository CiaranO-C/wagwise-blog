import Overlay from "./Overlay";
import PasswordInput from "./PasswordInput";
import { useState } from "react";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import SignInBtn from "./SignInBtn";

function SignUpModal({ switchModal, closeModal }) {
  const [formData, setFormData] = useState({});

  function handleFormData({ target }) {
    const field = target.id;
    setFormData({ ...formData, [field]: target.value });
  }

  return (
    <Overlay closeModal={closeModal}>
      <h1>Join the Wag Wise community</h1>
      <form action="">
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" />
        <PasswordInput
          passwordData={formData.password}
          handlePassword={handleFormData}
        />
        <ConfirmPasswordInput
          passwordData={formData.confirmPassword}
          handlePassword={handleFormData}
          match={formData.password !== formData.confirmPassword}
        />
        <button type="submit">Get training!</button>
      </form>
      <div className="sign-in">
        <span>Already a member?</span>
        <button onClick={switchModal}>Sign in</button>
      </div>
    </Overlay>
  );
}

export default SignUpModal;
