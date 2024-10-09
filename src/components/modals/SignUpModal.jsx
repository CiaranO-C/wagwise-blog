import Overlay from "./Overlay";
import PasswordInput from "./PasswordInput";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import ConfirmPasswordInput from "./ConfirmPasswordInput";

function SignUpModal({ closeModal }) {
  const [formData, setFormData] = useState({});

  function handleFormData({ target }) {
    const field = target.id;
    setFormData({ ...formData, [field]: target.value });
  }

  return (
    <Overlay>
      <button onClick={closeModal}>
        <IoIosCloseCircleOutline />
      </button>
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
          match={
            formData.password !== formData.confirmPassword
              ? "invalid"
              : undefined
          }
        />
        <button type="submit">Get training!</button>
      </form>
    </Overlay>
  );
}

export default SignUpModal;
