import styled from "styled-components";
import { Button } from "../../../components/styles/styles";

function ButtonContainer({ text, handleClick }) {
  return (
    <Div>
      <button onClick={handleClick}>{text}</button>
    </Div>
  );
}

const Div = styled.div`
  position: absolute;
  top: 0;
  width: 50vw;
  display: flex;
  justify-content: center;

  button {
    transform: translateY(-50%);
    ${Button}
  }
`;

export default ButtonContainer;
