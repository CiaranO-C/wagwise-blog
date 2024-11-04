import { css } from "styled-components";

const Button = css`
  cursor: pointer;
  border-radius: 20px;
  background-color: black;
  border: none;
  color: white;
  padding: 10px 15px;
  border: 1px solid black;
  transition: 0.25s ease-out;
`;

const ButtonHoverYellow = css`
  &:hover {
    background-color: #f9d23f;
    border: 1px solid black;
    color: black;
  }
`;

export { Button, ButtonHoverYellow };
