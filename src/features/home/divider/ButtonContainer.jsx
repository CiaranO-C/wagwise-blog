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

  * {
    transform: translateY(-50%);
  }
`;

export default ButtonContainer;
