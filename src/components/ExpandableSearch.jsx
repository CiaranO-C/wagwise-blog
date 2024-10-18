import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Search from "./Searchbar";
import { FadeIn } from "./styles/animation";

function ExpandableSearch({ intialPosition, buttonRef }) {
  const [open, setOpen] = useState(intialPosition);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef?.current && open) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <Header className={open ? "mainOpen" : "closed"}>
      <div className={open ? "content open" : "content"}>
        <Search inputRef={inputRef} />
      </div>
      <button
        ref={buttonRef}
        onClick={() => setOpen((o) => !o)}
        className={open ? "toggle open" : "toggle"}
      >
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 120px;
  z-index: 3;
  width: 100vw;
  display: flex;
  flex-direction: column;

  &.mainOpen {
    z-index: 4;
  }

  &.closed {
    pointer-events: none;
    z-index: 2;
  }

  & * {
    transition: transform 0.3s;
  }

  .content {
    z-index: 1;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 20px;
    background-color: #899648;
    transform: scaleY(0);
    transform-origin: top;

    & * {
      opacity: 0;
    }

    &.open * {
      animation: ${FadeIn} 0.3s ease-in forwards;
      animation-delay: 0.1s;
    }
  }

  .toggle {
    pointer-events: auto;
    margin-left: auto;
    margin-right: auto;
    width: min-content;
    cursor: pointer;
    background-color: #899648;
    border: none;
    display: flex;
    padding: 2px 15px;
    transform: translateY(-80px);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 1px solid;
    z-index: 3;

    svg {
      pointer-events: none;
    }
  }

  .open {
    z-index: 5;
    transform: scaleY(1) translateY(-30px);
    box-shadow:
      rgba(0, 0, 0, 0.07) 0px 1px 1px,
      rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px,
      rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }
`;

export default ExpandableSearch;
