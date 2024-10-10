import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { ModalProvider } from "./provider";

function App() {
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
