import { keyframes } from "styled-components";

const SlideUp = keyframes`
0% {
  transform: translateY(10px) scale(0.97);
  opacity: 0; 
}
100% {
  transform: translateY(0) scale(1); 
  opacity: 1; 
}
`;

export { SlideUp };
