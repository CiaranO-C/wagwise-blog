import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../../features/errors/404";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import Unauthorized from "../../features/errors/401";
import ServerError from "../../features/errors/500";

function Error() {
  const routeError = useRouteError();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    //if page renders as errorElement, navigate to styled error page within app
    if (!state && routeError.status) {
      return navigate("/error", { state: routeError.status });
    }
  });

  const status = state || "unknown";

  const ErrorMap = {
    404: <NotFound />,
    401: <Unauthorized />,
    500: <ServerError />,
    unknown: <ServerError />,
  };

  if (!state && routeError.status)
    return (
      <Spinner
        styles={{
          gridRow: "2 / 3",
          alignSelf: "center",
          justifySelf: "center",
        }}
      />
    );

  return <Main>{ErrorMap[status]}</Main>;
}

const Main = styled.main`
  grid-row: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Error;
