import styled, { css } from "styled-components";

const Button = css`
  cursor: pointer;
  border-radius: 20px;
  font-size: 1rem;
  background-color: black;
  border: none;
  color: white;
  padding: 12px 16px;
  border: 1px solid black;
  transition: 0.25s ease-out;

  &:hover {
    background-color: #f9d23f;
    border: 1px solid black;
    color: black;
  }
`;

export { Button };
