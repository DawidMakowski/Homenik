import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    }

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    html {
        font-size: 62.5%;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: #20242D;
    }

`;

export default GlobalStyle;
