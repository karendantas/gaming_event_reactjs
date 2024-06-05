import { createGlobalStyle } from 'styled-components';

export const  GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
}

body {
    background-color: ${props => props.theme.colors["purple-400"]};
  
}

body, input, button {
    font-family: 'Roboto', sans-serif;
}
::placeholder{
    color: ${props => props.theme.colors['brown-700']}
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