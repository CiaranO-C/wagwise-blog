import { Outlet } from "react-router-dom";
import Header from "../features/header/Header.jsx";
import styled from "styled-components";
import { ModalProvider } from "./providers/ModalProvider.jsx";
import { AuthContext } from "./providers/AuthProvider.jsx";
import { useContext, useEffect } from "react";
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
      </Layout>
    </ModalProvider>
  );
}

const Layout = styled.main`
  display: grid;
  grid-template-rows: 120px 1fr 40px;
  height: 100vh;
`;

export default App;
