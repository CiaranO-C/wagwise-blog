import { Outlet } from "react-router-dom";
import Header from "../features/header/Header.jsx";
import Footer from "../features/footer/Footer.jsx";
import styled from "styled-components";
import { ModalProvider } from "./providers/ModalProvider.jsx";
import { AuthContext } from "./providers/AuthProvider.jsx";
import { useContext, useEffect, useState } from "react";
import { userLoader } from "../api/user.js";
import { getToken } from "../api/utils.js";

function App() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    async function getUser() {
      const user = await userLoader();
      if (user) setUser(user.user);
    }
    if (!user && getToken()) {
      getUser();
    }
  }, [user, setUser]);

  return (
    <ModalProvider>
      <Layout>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </ModalProvider>
  );
}

const Layout = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export default App;
