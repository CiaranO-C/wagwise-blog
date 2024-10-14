import { useState } from "react";
import { PiArrowCircleRightThin, PiArrowCircleLeftThin } from "react-icons/pi";
import styled from "styled-components";

function PageNums({ itemsPerPage, itemCount, setItemRange }) {
  const [pageNumber, setPageNumber] = useState(1);

  const pages = Math.ceil(itemCount / itemsPerPage);
  //visible page nums including currently selected page
  const visiblePageNums = 3;

  function getIndexEnd(start) {
    const end = start + itemsPerPage;
    if (end > itemCount) {
      return undefined;
    }
    return end;
  }

  function previousPageNums() {
    return Array.from(
      { length: Math.max(1, pageNumber - pages + visiblePageNums - 1) },
      (_, i) => pageNumber - i - 1,
    )
      .filter((page) => page > 0)
      .map((page) => (
        <button
          key={page}
          className="page"
          onClick={() => handleChangePage(page)}
        >
          {page}
        </button>
      ))
      .reverse();
  }

  function nextPageNums() {
    return Array.from(
      { length: Math.min(visiblePageNums - 1, pages - pageNumber) },
      (_, i) => (
        <button
          key={i}
          className="page"
          onClick={() => handleChangePage(pageNumber + i + 1)}
        >
          {pageNumber + i + 1}
        </button>
      ),
    );
  }

  function handleChangePage(pageNum) {
    setPageNumber(pageNum);
    const i = (pageNum - 1) * itemsPerPage;
    setItemRange(i, getIndexEnd(i));
  }

  return (
    <PageNumContainer>
      <button
        disabled={itemCount <= 0 || pageNumber === 1}
        className="arrow"
        onClick={() => {
          if (pageNumber > 1) handleChangePage(pageNumber - 1);
        }}
      >
        <PiArrowCircleLeftThin />
      </button>
      {pages - pageNumber < visiblePageNums - 1 && previousPageNums()}
      <button className="page" disabled>
        {pageNumber}
      </button>
      {nextPageNums()}
      <button
        disabled={itemCount <= 0}
        className="arrow"
        onClick={() => {
          if (pageNumber !== pages) handleChangePage(pageNumber + 1);
        }}
      >
        <PiArrowCircleRightThin />
      </button>
    </PageNumContainer>
  );
}

const PageNumContainer = styled.div`
  display: flex;
  border: 1px solid white;
  width: max-content;
  height: 50px;
  gap: 5px;
  border-radius: 25px;
  justify-self: center;
  align-self: end;

  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  .page,
  .arrow {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff00;
    border: none;
    text-align: center;
    padding: 10px;
    color: white;
  }

  .page:disabled {
    color: orange;
  }

  .arrow {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export default PageNums;
