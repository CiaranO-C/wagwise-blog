import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ExpandableSearch from "../../components/ExpandableSearch";
import { useRef } from "react";
import Footer from "../../features/footer/Footer";

function ArticlePage() {
  const openSearchRef = useRef(null);

  return (
    <>
      <ExpandableSearch intialPosition={false} buttonRef={openSearchRef} />
      <ArticleMain>
        <Outlet />
        <Footer />
      </ArticleMain>
    </>
  );
}

const ArticleMain = styled.main`
  display: flex;
  flex-direction: column;
  grid-row: 2 / 4;
  align-items: center;
  overflow-x: hidden;
`;

export default ArticlePage;
