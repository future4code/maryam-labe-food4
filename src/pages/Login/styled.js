import styled from "styled-components";

export const ImgSplashScreenStyle = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  transition: all z-index opacity 500ms;
  top: 0;
  left: 0;
  z-index: 3;

  :disabled {
    opacity: 0;
    z-index: 0;
  }
`;
