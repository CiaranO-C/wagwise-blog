import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import styled, { keyframes } from "styled-components";

function LikeButton({ like, handleClick }) {
  const [animate, setAnimate] = useState(null);

  return (
    <Button
      onMouseLeave={() => {
        if (animate) setAnimate("shrink");
      }}
      onMouseOver={() => {
        setAnimate("grow");
      }}
      aria-label={like ? "unlike" : "like"}
      onClick={() => {
        handleClick();
        setAnimate(null);
      }}
    >
      {like ? (
        <>
          <IoMdHeart />
          <IoMdHeart className={animate ? `${animate} svg-style` : "hide"} />
        </>
      ) : (
        <>
          <IoMdHeart className="svg-style" />
          <IoMdHeart className={animate ? animate : "hide"} />
        </>
      )}
    </Button>
  );
}

const Grow = keyframes`
0% {
transform: scale(0);
}
100% {
transform: scale(1);
}
`;

const Shrink = keyframes`
0% {
transform: scale(1);
}
100% {
transform: scale(0);
}
`;

const Button = styled.button`
  background: none;
  border: none;
  position: relative;
  height: 30px;
  width: 30px;
  display: flex;
  cursor: pointer;
  transition: transform: 0.2s ease-out;

  &:active {
    transform: scale(1.05);
  }

  svg {
    position: absolute;
    pointer-events: none;
    color: red;
    height: 100%;
    width: 100%;
    stroke: red;
    stroke-width: 30;
  }

  .shrink {
    animation: ${Shrink} 0.4s forwards;
  }

  .grow,
  .shrink {
    z-index: 10;
  }

  .grow {
    animation: ${Grow} 0.2s forwards;
  }

  .svg-style {
    fill: #f9d23f;
  }

  .hide {
    visibility: hidden;
  }
`;

export default LikeButton;
