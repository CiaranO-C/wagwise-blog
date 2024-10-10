import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../app/provider";
import AuthModal from "./modals/AuthModal";

function Header() {
  const { modal, setModal } = useContext(ModalContext);

  return (
    <>
      <MainHeader>
        <div className="header-content">
          <Link to="/">
            <img src="src/assets/wagwise-logo.png" alt="wagwise logo" />
          </Link>
          <HeaderButtons>
            {<NavLink to="/about">About</NavLink>}
            <button className="sign-in" onClick={() => setModal("signIn")}>
              Sign in
            </button>
            <button className="sign-up" onClick={() => setModal("signUp")}>
              Get Wise
            </button>
          </HeaderButtons>
        </div>
        <HeaderTrim>
          <img src="src/assets/paws.png" />
        </HeaderTrim>
      </MainHeader>
      {modal && createPortal(<AuthModal />, document.body)}
    </>
  );
}

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b6c471;

  .header-content {
    height: 90px;
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #b8c671;
  }
  img {
    height: 40px;
  }
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    cursor: pointer;
    padding: 12px;
    border-radius: 20px;
    font-size: 1rem;
  }

  .sign-in {
    background: none;
    border: none;
  }

  .sign-up {
    background-color: black;
    border: none;
    color: white;
  }
`;

const HeaderTrim = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  height: 30px;
  background-color: #899648;
  border-top: 0.75px solid black;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  img {
    pointer-events: none;
    user-select: none;
    height: 300px;
    transform: rotate(45deg) translateX(-19px) translateY(34px);
  }
`;

export default Header;
