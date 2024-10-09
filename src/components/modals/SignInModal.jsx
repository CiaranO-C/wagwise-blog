import { useState } from "react";
import Overlay from "./Overlay";
import PasswordInput from "./PasswordInput";

function SignInModal({ closeModal, switchModal }) {
  const [formData, setFormData] = useState({});

  return (
    <Overlay closeModal={closeModal}>
      <h1>Welcome back!</h1>
      <form action="">
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" />
        <PasswordInput
          passwordData={formData.password}
          handlePassword={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
        <button type="submit">Sign in</button>
      </form>
      <div className="sign-up">
        <span>Don't have an account?</span>
        <button onClick={switchModal}>Join now</button>
      </div>
    </Overlay>
  );
}

export default SignInModal;
