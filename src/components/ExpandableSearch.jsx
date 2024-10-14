import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Search from "./Searchbar";
import { FadeIn } from "./styles/animation";

function ExpandableSearch({ intialPosition }) {
  const [open, setOpen] = useState(intialPosition);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef?.current && open) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <Header className={!open ? "closed" : undefined}>
      <div className={open ? "content open" : "content"}>
        <Search inputRef={inputRef} />
      </div>
      <button
        onClick={() => setOpen((o) => !o)}
        className={open ? "toggle open" : "toggle"}
      >
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </Header>
  );
}

const Header = styled.header`
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;

  &.closed {
    pointer-events: none;
  }

  & * {
    transition: transform 0.3s;
  }

  .content {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0px 0px 30px 20px;
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
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: min-content;
    cursor: pointer;
    background-color: #899648;
    border: none;
    display: flex;
    padding: 5px 10px;
    transform: translateY(-50px);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 1px solid;

    svg {
      pointer-events: none;
    }
  }

  .open {
    transform: scaleY(1);
    box-shadow:
      rgba(0, 0, 0, 0.07) 0px 1px 1px,
      rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px,
      rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }
`;

export default ExpandableSearch;
