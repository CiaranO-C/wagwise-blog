import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../app/providers/ModalProvider.jsx";
import AuthModal from "./modals/AuthModal";
import { Button, ButtonHoverYellow } from "../../components/styles/styles.jsx";
import { AuthContext } from "../../app/providers/AuthProvider.jsx";
import { deleteToken } from "../../api/utils.js";
import wagwiseLogo from "/assets/wagwise/wagwise-logo.png";

function Header() {
  const { modal, setModal } = useContext(ModalContext);
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <MainHeader>
        <div className="header-content">
          <Link className="home-link" to="/">
            <div className="sun" />
            <img src={wagwiseLogo} alt="wagwise logo" />
          </Link>
          <HeaderButtons>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <div className="divider" />
            {user ? (
              <>
                <p>
                  Welcome back,{" "}
                  <span className="username">{user.username}</span>
                </p>
                <button
                  onClick={() => {
                    deleteToken();
                    setUser(null);
                  }}
                  className="logout"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="sign-in" onClick={() => setModal("signIn")}>
                  Sign in
                </button>
                <button className="sign-up" onClick={() => setModal("signUp")}>
                  Get Wise
                </button>
              </>
            )}
          </HeaderButtons>
        </div>
        <HeaderTrim />
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
  overflow: hidden;
  padding: 0px 20px;
  height: 120px;
  z-index: 3;
  position: fixed;
  width: 100vw;
  top: 0;

  &,
  & * {
    letter-spacing: 0.5px;
  }

  .header-content {
    height: 90px;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    background-color: #b8c671;
  }

  .home-link {
    position: relative;
  }

  .sun {
    color: rgba(17, 17, 26, 0.1);
    width: 275px;
    height: 275px;
    border-radius: 50%;
    background-color: #f9d23f;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    box-shadow:
      8px 0px 24px,
      16px 0px 56px,
      24px 0px 80px,
      -8px 0px 24px,
      -16px 0px 56px,
      -24px 0px 80px;
    transition: color 0.6s ease-in-out;
  }

  .home-link:hover .sun,
  .sun:hover {
    color: #f9d23f;
  }

  img {
    position: relative;
    z-index: 1;
    height: 40px;
  }

  a:active,
  button:active {
    transform: scale(1.1);
  }
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .divider {
    border: 0.5px solid black;
    align-self: stretch;
  }

  .username {
    font-weight: 500;
  }

  button {
    ${Button}
  }

  .sign-in {
    padding: 0;
    border-radius: 0px;
    background: none;
    border: none;
    border-bottom: 1px solid transparent;
    color: black;
    transition: border 0.3s ease-out;

    &:hover {
      border-color: black;
    }
  }

  .sign-up,
  .logout {
    ${ButtonHoverYellow}
    border: 1px solid black;
    transition: 0.25s ease-out;
  }

  .active {
    border-color: black;
  }
`;

const HeaderTrim = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 150%;

  height: 30px;
  background-color: #899648;
  border-top: 1px solid black;
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
