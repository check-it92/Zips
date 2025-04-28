import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../fonts/EHNormalTrial-Regular.otf";
const GlobalStyles = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

ul,li{
  list-style: none;
}

a{
  text-decoration: none;
  color:inherit;
}

html {
  font-size: 62.5%;
}

body{
  font-size: 1.6rem;
  font-family: "EHNormalTrial";
}

:root {
  --light-color: #fff;
  --dark-color: #000;
  --border-color: #ccc;
}

@font-face {
  font-family: "EHNormalTrial";
  src: url("/fonts/EHNormalTrial-Regular.otf") format("truetype");
}
`;

export default GlobalStyles;
