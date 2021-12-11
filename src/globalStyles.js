import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "RobotoMono";
  src: url ("./fonts/RobotoMono-Thin.ttf"); 
}

* {
  font-family: "RobotoMono", monospace;
}

body{
  display:flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #FFF;
  background: linear-gradient(to right, rgb(17, 67, 87), #148f77);

}

`;
