import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useMemo, useState } from "react";
import SignInModal from "./modals/SignInModal";
import SignUpModal from "./modals/SignUpModal";
import { createPortal } from "react-dom";

function Header() {
  const [modal, setModal] = useState(null);

  const authModals = useMemo(
    () => ({
      signIn: (
        <SignInModal
          switchModal={() => setModal("signUp")}
          closeModal={() => setModal(null)}
        />
      ),
      signUp: (
        <SignUpModal
          switchModal={() => setModal("signIn")}
          closeModal={() => setModal(null)}
        />
      ),
    }),
    [],
  );

  return (
    <>
      <MainHeader>
        <img src="src/assets/wagwise-logo.png" alt="wagwise logo" />
        <HeaderButtons>
          {<NavLink to="/about">About</NavLink>}
          <button onClick={() => setModal("signIn")}>Sign in</button>
          <button onClick={() => setModal("signUp")}>Get Wise</button>
        </HeaderButtons>
      </MainHeader>
      {modal && createPortal(authModals[modal], document.body)}
    </>
  );
}

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;

  img {
    height: 40px;
  }
`;

const HeaderButtons = styled.div`
  display: flex;
`;

export default Header;
