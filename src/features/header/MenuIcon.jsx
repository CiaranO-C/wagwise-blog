import { useContext, useState } from "react";
import styled from "styled-components";
import { ExpandFromTop, FadeIn } from "../../components/styles/animation";
import { AuthContext } from "../../app/providers/AuthProvider";
import { ModalContext } from "../../app/providers/ModalProvider";
import { Link } from "react-router-dom";
import { deleteTokens } from "../../api/utils";

function MenuIcon() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const { setModal } = useContext(ModalContext);

  function handleButtonClick({ target }) {
    const { id: modalType } = target;
    setModal(modalType);
    handleLinkClick();
  }

  function handleLinkClick() {
    setTimeout(() => {
      setOpen(false);
    }, 350);
  }

  return (
    <Container>
      <MenuBtn onClick={() => setOpen((o) => !o)}>
        <div id="top" className={open ? `line open` : "line"} />
        <div className="mid">
          <div className={open ? `line open` : "line"} />
          <div className={open ? `line open` : "line"} />
        </div>
        <div id="bottom" className={open ? `line open` : "line"} />
      </MenuBtn>
      <MenuList className={open ? "open" : ""}>
        {user && <h2>Welcome back, {user.username}</h2>}
        <Link onClick={handleLinkClick} to="/home">
          Home
        </Link>
        <Link onClick={handleLinkClick} to="/about">
          About
        </Link>
        <div className="auth-buttons">
          {user ? (
            <button
              id="logout"
              onClick={() => {
                deleteTokens();
                setUser(null);
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <button id="signIn" onClick={handleButtonClick}>
                Sign in
              </button>
              <button id="signUp" onClick={handleButtonClick}>
                Sign up
              </button>
            </>
          )}
        </div>
      </MenuList>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  position: relative;
  z-index: 1;

  @media (max-width: 635px) {
    display: block;
  }
`;

const MenuList = styled.div`
  position: fixed;

  transform: scaleX(0);
  transition: transform 0.3s ease-in;
  background-color: #899648;
  transform-origin: right;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  right: 0;
  bottom: 0;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  h2 {
    border-bottom: 0.75px solid #b8c671;
    padding: 10px 20px;
    font-size: 1.3rem;
    background-color: #4e5040;
    color: white;
  }

  a {
    color: white;
    padding: 20px;
    font-size: 1rem;

    &:hover {
      border-color: #b8c671;
    }

    &:active {
      background-color: #6b743d;
      transform: none;
    }
  }

  & > * {
    opacity: 0;
  }

  &.open {
    transition: transform 0.5s;
    transform: scaleX(1);

    & > * {
      animation: ${FadeIn} 0.3s 0.5s forwards;
    }
  }

  .auth-buttons {
    display: flex;
    flex-direction: column;
    margin-top: auto;

    button {
      background-color: #6b743d;
      border: none;
      padding: 20px;
      text-align: start;
      font-size: 1.1rem;
      color: white;
      transition:
        background-color 0.3s ease-out,
        color 0.3s ease-out;
      cursor: pointer;

      &:hover {
        background-color: #4e5040;
      }

      &:active {
        transform: none;
        background-color: #4e5040;
      }
    }

    #signUp,
    #logout {
      color: white;
      background-color: black;

      &:hover,
      &:active {
        color: black;
        background-color: rgb(249, 210, 63);
      }
    }
  }
`;

const MenuBtn = styled.button`
  display: flex;
  flex-direction: column;
  width: 28px;
  background: none;
  border: none;
  gap: 5px;
  cursor: pointer;

  .line,
  .mid {
    width: 100%;
    height: 3px;
  }

  .line {
    background-color: black;
    border-radius: 5px;
    transition:
      transform 0.2s ease-out,
      opacity 0.3s;

    &.open {
      transition:
        transform 0.3s ease-out,
        opacity 0.1s;
    }
  }

  #top {
    &.open {
      transform: translateY(9px);
      opacity: 0;
    }
  }

  #bottom {
    &.open {
      transform: translateY(-9px);
      opacity: 0;
    }
  }

  .mid {
    position: relative;

    .line {
      position: absolute;
    }

    .line:nth-child(1) {
      &.open {
        transform: rotate(45deg);
      }
    }

    .line:nth-child(2) {
      &.open {
        transform: rotate(-45deg);
      }
    }
  }
`;

export default MenuIcon;
