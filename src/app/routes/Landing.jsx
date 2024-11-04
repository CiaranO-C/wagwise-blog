import styled from "styled-components";
import { Button, ButtonHoverYellow } from "../../components/styles/styles";
import { Link } from "react-router-dom";
import Footer from "../../features/footer/Footer";
import wagwiseDog from "/assets/wagwise/wagwise-dog.png";

function Landing() {
  return (
    <>
      <LandingMain>
        <div className="content">
          <div className="text">
            <h1>
              Empowering <br />
              Owners & Dogs
            </h1>
            <p>Take the first step in building a better future for your dog</p>
            <Link to="home" className="button">
              Start Learning
            </Link>
          </div>
          <div className="frame">
            <div className="shadow" />
            <img src={wagwiseDog} alt="dog logo" />
          </div>
        </div>
      </LandingMain>
      <Footer />
    </>
  );
}

const LandingMain = styled.main`
  grid-row: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b8c671;
  padding: 20px;
  max-height: calc(100vh - 160px);

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #b8c671;
    font-family: "Wix Madefor Text", sans-serif;
    flex: 1;
    max-width: 1200px;
    gap: 20px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      user-select: none;
    }

    h1 {
      position: relative;
      left: -5px;
      font-size: clamp(3rem, 6vw, 5rem);
      margin-bottom: 10px;
    }

    .frame {
      position: relative;
      height: clamp(240px, 30vw, 400px);

      img {
        height: 100%;
        z-index: 1;
        position: relative;
      }

      .shadow {
        position: absolute;
        z-index: 0;
        box-shadow: #f9d23f -20px -1px 80px 25px;
        background-color: #f9d23f;
        height: 85%;
        width: 80%;
        border-radius: 50%;
        top: 4px;
        left: -18px;
        right: 0;
        margin: auto;
      }
    }

    .button {
      ${Button}
      ${ButtonHoverYellow}
      margin-top: 20px;
      border: 1px solid black;
      transition: 0.25s ease-out;
    }

    @media (max-width: 610px) {
      justify-content: center;

      .text {
        align-items: center;

        h1,
        p {
          text-align: center;
        }
      }

      .frame {
        display: none;
      }
    }
  }
`;

export default Landing;
