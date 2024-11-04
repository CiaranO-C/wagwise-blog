import styled from "styled-components";

function ButtonContainer({ children }) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  position: absolute;
  top: 0;
  width: 50vw;
  display: flex;
  justify-content: center;

  button,
  .button {
    transform: translateY(-50%);
    font-family: inherit;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  * {
    font-size: clamp(0.8rem, 3vw, 1rem);
  }
`;

export default ButtonContainer;
