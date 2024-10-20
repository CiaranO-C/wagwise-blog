import styled from "styled-components";
import curvedArrow from "/assets/png/curved-arrow.png";


function LookBelow() {
  return (
    <Div className="content">
      <h2>
        more
        <br />
        training tips
        <br />
        below!
      </h2>
      <img src={curvedArrow} alt="arrow" />
    </Div>
  );
}

const Div = styled.div`
  align-items: center;
  justify-content: space-evenly;
  border-left: 0.75px solid;
  gap: 10px;

  img {
    width: clamp(65px, 20%, 80px);
  }
`;

export default LookBelow;
