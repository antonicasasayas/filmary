import { createGlobalStyle } from "styled-components";

const theme = {
  white: "#fff",
  darkBlue: "#14213d",
  black: "#000",
  charcoal: "#2A303C",
};

const GlobalStyle = createGlobalStyle`
*, *::after, *::before{
  box-sizing: border-box ;
}
html{
  margin-right: 0;
  width: 100%;
   overflow-x:hidden;

}
  body {
    color: white;
    font-family: Inter, Sans-Serif;
  }
`;



export { theme, GlobalStyle };
