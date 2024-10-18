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

const ExpandFromTop = keyframes`
0% {
transform-origin: top;
transform: scaleY(0);
}
100% {
transform-origin: top;
transform: scaleY(1);
}
`;

const FadeIn = keyframes`
0% {
opacity: 0;
}
90% {
opactiy: 0;
}
100% {
opacity: 1;
}
`;

const SlideToLeft = keyframes`
0% {
transform: translateX(0%);
}
100% {
transform: translateX(-100%);
}
`;

export { SlideUp, ExpandFromTop, FadeIn, SlideToLeft };
