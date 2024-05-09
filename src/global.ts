import { createGlobalStyle } from 'styled-components';

export const  GlobalStyle = createGlobalStyle`

:root{
font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    font-weight: 400;

    --white-100: #f9fafb;
    --gray-100: #e9e7e7;
    --purple-400: #976aff;
    --purple-500: #8358e7;
    --red-400: #ef4444;
    --yellow-500: #ffef5e;
    --brown-700: #292524;
    background-color: var(--purple-400);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

::placeholder{
    color: var(--brown-700)
}

@media (max-width: 1200px) {
    html {
        font-size: 90%;
    }
}

@media (max-width: 550px){
    html{
        font-size: 70%;
    }
}


`