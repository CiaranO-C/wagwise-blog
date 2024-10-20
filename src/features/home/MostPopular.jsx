import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import { getRandomDog } from "./utils";

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
        <h2 className="title">Most popular</h2>
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
      color: #ffffffc4;
      z-index: 2;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: end;
      padding: 2px 5px;
      background-color: #0000002e;
      font-size: 1.3rem;
      letter-spacing: 5px;
    }
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
    width: 300%;

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
`;
export default MostPopular;
