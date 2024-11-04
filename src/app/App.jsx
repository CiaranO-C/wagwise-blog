import { Outlet, useLocation } from "react-router-dom";
import Header from "../features/header/Header.jsx";
import styled from "styled-components";
import { ModalProvider } from "./providers/ModalProvider.jsx";
import { AuthContext } from "./providers/AuthProvider.jsx";
import { useContext, useEffect } from "react";
import { userLoader } from "../api/user.js";
import { getToken } from "../api/utils.js";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getUser() {
      const { token, error } = await getToken(signal);

      if (token && !error) {
        const user = await userLoader(signal, token);
        if (user) setUser(user.user);
      }
    }
    if (!user) {
      getUser();
    }

    return () => {
      controller.abort();
    };
  }, [user, setUser]);

  //fix pages rendering slightly scrolled down on mobile
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ModalProvider>
      <Layout>
        <Header />
        <Outlet />
      </Layout>
    </ModalProvider>
  );
}

const Layout = styled.main`
  display: grid;
  grid-template-rows: 120px 1fr 40px;
  min-height: 100vh;
`;

export default App;
