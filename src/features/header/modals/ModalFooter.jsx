import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../app/provider";

function ModalFooter() {
  const { modal, setModal, setAnimate } = useContext(ModalContext);

  const text =
    modal === "signUp" ? "Already a member?" : "Don't have an account?";
  const btnText = modal === "signUp" ? "Sign in" : "Join now";
  const switchModal = modal === "signUp" ? "signIn" : "signUp";

  return (
    <Footer>
      <span>{text}</span>
      <button
        onClick={() => {
          setModal(switchModal);
          setAnimate(false);
        }}
      >
        {btnText}
      </button>
    </Footer>
  );
}
const Footer = styled.footer``;
export default ModalFooter;
