import styled from "styled-components";

function ErrorLayout({ children, status, message }) {
  return (
    <ErrorSection>
      <ErrorStatus>
        {children}
        <h1>{status}</h1>
        {children}
      </ErrorStatus>
      <p>{message}</p>
    </ErrorSection>
  );
}

const ErrorStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: clamp(4rem, 15vw, 10rem);
  }

  svg {
    height: clamp(4rem, 15vw, 10rem);
    width: clamp(4rem, 15vw, 10rem);
  }
`;

const ErrorSection = styled.section`
  background-color: #f9d23f;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export default ErrorLayout;
