import styled from "styled-components";
import { ExpandFromTop, FadeIn } from "../../components/styles/animation";
import Footer from "../../features/footer/Footer";
import paws from "/assets/png/paws.png";

function About() {
  return (
    <AboutMain>
      <header>
        <h1>About</h1>
      </header>
      <p>
        At Wag Wise, we believe that every dog has the potential to be a well
        behaved, confident companion. Our mission is to strengthen the bond
        between you and your dog through positive reinforcement training
        techniques. With patience, consistency, and a lot of love, we help dogs
        and their owners lead happier, more harmonious lives. Let’s make every
        wag a wise one!
      </p>
      <img className="paws-one" src={paws} alt="dog paws backdrop" />
      <img className="paws-two" src={paws} alt="dog paws backdrop" />
      <Footer />
    </AboutMain>
  );
}

const AboutMain = styled.main`
  max-height: calc(100vh - 120px);
  grid-row: 2 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
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
    top: -52px;
    transform: rotate(30deg);
  }

  .paws-two {
    left: 11px;
    top: -340px;
    transform: rotate(-157deg);
  }

  header {
    background-color: #4e5040;
    color: white;
    width: 100vw;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 20px;
  }

  h1 {
    text-align: center;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 200;
    font-size: 3.5rem;
    font-weight: 200;
    padding-bottom: 10px;
    border-bottom: 0.75px solid;
  }

  p {
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1.5;
    font-size: clamp(1rem, 2vw, 1.2rem);
    border: 0.75px solid;
    padding: 30px;
    border-radius: 40px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: cornsilk;
    z-index: 1;
    max-width: 935px;
    margin: auto 20px;
  }
`;

export default About;
