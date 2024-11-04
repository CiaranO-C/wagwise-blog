import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import { getRandomDog } from "./utils";
import { LuBadge } from "react-icons/lu";

function MostPopular({ articles }) {
  const [index, setIndex] = useState(0);
  const images = useRef(getDogs());

  function getDogs() {
    let dogs = ["", "", ""];

    dogs = dogs.map(() => {
      let path;
      do {
        path = getRandomDog();
      } while (dogs.includes(path));
      return path;
    });

    return dogs;
  }

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % articles.length);
  }

  function handlePrev() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1,
    );
  }

  return (
    <Section>
      <button onClick={handlePrev} className="left">
        <AiOutlineArrowLeft />
      </button>
      <div className="carousel-frame">
        <div className="title">
          <LuBadge />
          <LuBadge />
          <h2>
            Most
            <br />
            popular
          </h2>
        </div>
        <div className={`slider index${index}`}>
          <CarouselItem article={articles[0]} dog={images.current[0]} />
          <CarouselItem article={articles[1]} dog={images.current[1]} />
          <CarouselItem article={articles[2]} dog={images.current[2]} />
        </div>
      </div>
      <button onClick={handleNext} className="right">
        <AiOutlineArrowRight />
      </button>
    </Section>
  );
}

const Section = styled.section`
  grid-column: 2 / 5;
  grid-row: 3 / 4;
  position: relative;

  .carousel-frame {
    position: relative;
    display: flex;
    overflow: hidden;
    height: 100%;
    min-height: 400px;

    .title {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      z-index: 2;
      right: 0;
      bottom: 0;
      width: 120px;
      height: 120px;
      transform: translate(-3px, -10px) rotate(13deg);

      h2 {
        text-align: center;
        z-index: 1;
        font-size: 1.15rem;
        transform: translateY(-3px);
      }

      svg {
        position: absolute;
        height: 100%;
        width: 100%;
        fill: rgb(249, 210, 63);
        stroke: black;
        stroke-width: 0.5;
        z-index: 1;
      }

      svg + svg {
        z-index: 0;
        height: 105%;
        width: 105%;
        stroke: white;
      }
    }
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;

    &.index0 {
      transform: translateX(0%);
    }

    &.index1 {
      transform: translateX(-100%);
    }

    &.index2 {
      transform: translateX(-200%);
    }
  }

  .left,
  .right {
    z-index: 1;
    margin-top: auto;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    bottom: 0;
    padding: 5px;
    align-items: center;
    height: fit-content;
    margin-bottom: auto;
    background: #0000002e;
    color: white;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease-out;

    &:hover {
      background-color: black;
    }

    svg {
      pointer-events: none;
      width: 30px;
      height: 30px;
    }
  }

  .left {
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .right {
    right: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  @media only screen and (max-width: 600px) {
    grid-column: 1 / 5;
    grid-row: 4 / 5;
  }
`;
export default MostPopular;
