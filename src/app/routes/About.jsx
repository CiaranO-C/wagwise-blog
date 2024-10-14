import styled from "styled-components";
import { ExpandFromTop, FadeIn } from '../../components/styles/animation';

function About() {
  return (
    <AboutMain>
      <h1>About</h1>
      <p>
        At Wag Wise, we believe that every dog has the potential to be a well
        behaved, confident companion. Our mission is to strengthen the bond
        between you and your dog through positive reinforcement training
        techniques. With patience, consistency, and a lot of love, we help dogs
        and their owners lead happier, more harmonious lives. Let’s make every
        wag a wise one!
      </p>
      <img className="paws-one" src="src/assets/paws.png" alt="dog paws backdrop" />
      <img className="paws-two" src="src/assets/paws.png" alt="dog paws backdrop" />
    </AboutMain>
  );
}

const AboutMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
  overflow: hidden;
  gap: 30px;
  background-color: #899648;
  animation: ${ExpandFromTop} 0.4s ease-out forwards;

  & * {
    opacity: 0;
    animation: ${FadeIn} 0.8s ease-out forwards;
    animation-delay: 0.4s;
  }

  .paws-one,
  .paws-two {
  pointer-events: none;
  user-select: none;
  animation-delay: 0.8s;
    position: absolute;
    height: 800px;
    filter: opacity(0.25);
    z-index: 0;
  }

  .paws-one {
    right: 18px;
    top: -75px;
    transform: rotate(45deg);
  }

  .paws-two {
    left: 11px;
    top: -340px;
    transform: rotate(-157deg);
  }

  h1,
  p {
    font-family: "Wix Madefor Text", sans-serif;
  }

  h1 {
    font-size: 4rem;
  }

  p {
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1.5;
    font-size: 1.2rem;
    width: clamp(531px, 90%, 936px);
    border: 0.75px solid;
    padding: 30px;
    border-radius: 40px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: #b6c471;
    z-index: 1;
  }
`;

export default About;
