import { createPortal } from "react-dom";
import { useState } from "react";
import SignUpModal from "./SignUpModal";

function SignUpBtn() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign up</button>
      {showModal &&
        createPortal(
          <SignUpModal closeModal={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
}

export default SignUpBtn;
