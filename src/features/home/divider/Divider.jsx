import styled from "styled-components";
import ButtonContainer from "./ButtonContainer";
import Hottest from "./Hottest";
import LookBelow from "./LookBelow";
import { Link } from "react-router-dom";
import { Button } from "../../../components/styles/styles";

function Divider({ openSearch, article }) {
  return (
    <Section>
      <ButtonContainer>
        <Link className="button" to={`/article/${article.id}`}>
          Read article
        </Link>
      </ButtonContainer>
      <ButtonContainer>
        <button onClick={openSearch}>Search for something else</button>
      </ButtonContainer>
      <Hottest id={article.id} comments={article.comments} />
      <LookBelow />
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  border-top: 2px solid;
  border-bottom: 2px solid;
  padding: 20px 0px;
  background-color: #b6c471;
  grid-column: 1 / -1;
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 1px,
    rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px,
    rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > div:nth-child(1) {
    left: 0;
  }

  & > div:nth-child(2) {
    right: 0;
  }

  .button,
  button {
    ${Button}
  }

  .content {
    flex: 1;
    display: flex;
    padding: 0px 20px;
    height: 145px;

    h2 {
      font-size: clamp(20px, 5vw, 2rem);
    }
  }
`;

export default Divider;
