import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../../features/errors/404";

function Error() {
  const { state: errorStatus } = useLocation();
  NotFound;
  const ErrorMap = {
    404: <NotFound />,
  };

  return <Main>{ErrorMap[errorStatus]}</Main>;
}

const Main = styled.main`
  grid-row: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Error;
