import styled from "styled-components";

function Overlay({ children }) {
  return <Backdrop>{children}</Backdrop>;
}

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export default Overlay;
