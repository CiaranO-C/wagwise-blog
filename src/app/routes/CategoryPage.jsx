import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../features/footer/Footer";
import ExpandableSearch from "../../components/ExpandableSearch";
import { useRef } from "react";

function CategoryPage() {
  const openSearchRef = useRef(null);

  function openSearch() {
    if (openSearchRef.current) {
      openSearchRef.current.click();
    }
  }

  return (
    <>
      <ExpandableSearch intialPosition={false} buttonRef={openSearchRef} />
      <CategoryMain>
        <Outlet context={openSearch}/>
        <Footer />
      </CategoryMain>
    </>
  );
}

const CategoryMain = styled.main`
  display: flex;
  flex-direction: column;
  grid-row: 2 / 4;
`;

export default CategoryPage;
