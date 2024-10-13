import { useContext } from "react";
import { ModalContext } from "../../../app/providers/ModalProvider.jsx"
import Overlay from "./Overlay";
import AuthForm from "./AuthForm";
import ModalFooter from "./ModalFooter";
import styled from 'styled-components';

function AuthModal() {
  const { modal } = useContext(ModalContext);

  const title =
    modal === "signUp" ? "Join the Wag Wise community" : "Welcome back!";
  return (
    <Overlay>
      <Title>{title}</Title>
      <AuthForm />
      <ModalFooter />
    </Overlay>
  );
}

const Title = styled.h1`
  font-weight: 200;
  font-size: 3rem;
  text-align: center;
`;

export default AuthModal;
