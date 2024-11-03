import { useState } from "react";
import styled from "styled-components";

function MenuIcon() {
  const [open, setOpen] = useState(false);

  return (
    <MenuBtn onClick={() => setOpen((o) => !o)}>
      <div id="top" className={open ? "line open" : "line"} />
      <div className="mid">
        <div className={open ? "line open" : "line"} />
        <div className={open ? "line open" : "line"} />
      </div>
      <div id="bottom" className={open ? "line open" : "line"} />
    </MenuBtn>
  );
}

const MenuBtn = styled.button`
  display: flex;
  flex-direction: column;
  width: 28px;
  background: none;
  border: none;
  gap: 5px;
  cursor: pointer;

  .line,
  .mid {
    width: 100%;
    height: 3px;
  }

  .line {
    background-color: black;
    border-radius: 5px;
    transition:
      transform 0.2s ease-out,
      opacity 0.3s;

    &.open {
      transition:
        transform 0.3s ease-out,
        opacity 0.1s;
    }
  }

  #top {
    &.open {
      transform: translateY(9px);
      opacity: 0;
    }
  }

  #bottom {
    &.open {
      transform: translateY(-9px);
      opacity: 0;
    }
  }

  .mid {
    position: relative;

    .line {
      position: absolute;
    }

    .line:nth-child(1) {
      &.open {
        transform: rotate(45deg);
      }
    }

    .line:nth-child(2) {
      &.open {
        transform: rotate(-45deg);
      }
    }
  }
`;

export default MenuIcon;
