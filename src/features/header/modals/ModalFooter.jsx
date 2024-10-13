import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../../app/providers/ModalProvider.jsx"

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
const Footer = styled.footer`
button {
cursor: pointer;
background: none;
border: none;
font-weight: 550;
font-size: inherit;
font-family: inherit;
margin-left: 5px;
transition: 0.2s ease-out;
text-decoration: underline;
}
`;
export default ModalFooter;
