import styled from "styled-components";
import { Button } from "../../components/styles/styles";

function Landing() {
  return (
    <LandingMain>
      <div className="content">
        <div className="text">
          <h1>
            Empowering <br />
            Owners & Dogs
          </h1>
          <p>Take the first step in building a better future for your dog</p>
          <button>Start Learning</button>
        </div>
        <div className="frame">
          <div className="shadow" />
          <img src="src/assets/wagwise-dog.png" alt="dog logo" />
        </div>
      </div>
    </LandingMain>
  );
}

const LandingMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b8c671;
  padding: 20px;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #b8c671;
    font-family: "Wix Madefor Text", sans-serif;
    flex: 1;
    max-width: 1200px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 90px;
      user-select: none;
    }

    h1 {
      position: relative;
      left: -5px;
      font-size: 5rem;
      margin-bottom: 10px;
    }

    .frame {
      position: relative;
      height: 50vh;

      img {
        height: 100%;
        z-index: 1;
        position: relative;
      }

      .shadow {
        position: absolute;
        z-index: 0;
        box-shadow: #f9d23f -20px -1px 80px 25px;
        height: 85%;
        width: 80%;
        border-radius: 50%;
        top: 4px;
        left: -18px;
        right: 0;
        margin: auto;
      }
    }

    button {
      ${Button}
      margin-top: 20px;
      border: 1px solid black;
      transition: 0.25s ease-out;

      &:hover {
        background-color: #f9d23f;
        border: 1px solid black;
        color: black;
      }
    }
  }
`;

export default Landing;
