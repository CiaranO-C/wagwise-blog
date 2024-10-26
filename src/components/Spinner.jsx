import { MoonLoader } from "react-spinners";
import styled from "styled-components";

function Spinner({ styles }) {
  return (
    <SpinnerWrapper style={styles}>
      <MoonLoader color="#f9d23f" />
    </SpinnerWrapper>
  );
}

const SpinnerWrapper = styled.div`
  span {
    span:nth-child(1) {
      min-width: 22px;
      min-height: 22px;
      box-shadow:
        8px 0px 24px,
        16px 0px 56px,
        24px 0px 80px,
        -8px 0px 24px,
        -16px 0px 56px,
        -24px 0px 80px;
      color: rgb(255 224 0);
    }

    span:nth-child(2) {
      visibility: hidden;
    }
  }
`;

export default Spinner;
