import { IoIosCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";
import { SlideUp } from "../sharedStyles";
import { useContext } from "react";
import { ModalContext } from "../../app/provider";

function Overlay({ children }) {
  const { setModal, animate, setAnimate } = useContext(ModalContext);
console.log(animate);

  return (
    <Backdrop className={animate ? "slide" : undefined}>
      <button
        className="close"
        onClick={() => {
          setModal(null);
          setAnimate(true);
        }}
      >
        <IoIosCloseCircleOutline />
      </button>
      {children}
    </Backdrop>
  );
}

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  padding: 60px 25px;
  
  &.slide {
    animation: ${SlideUp} 0.1s linear forwards;
  }

  .close {
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;

    svg {
      pointer-events: none;
      height: 30px;
      width: 30px;
    }
  }

  
}
`;

export default Overlay;
