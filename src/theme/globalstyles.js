import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,400&display=swap');

*, *::before, *::after{

   box-sizing: border-box;

}
ul[class],
ol[class] {
  padding: 0;
}


body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}`;

export default GlobalStyles;
