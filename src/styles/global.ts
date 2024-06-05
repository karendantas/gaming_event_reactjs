import { createGlobalStyle } from 'styled-components';

export const  GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
}

body {
<<<<<<< HEAD
    background-color: ${props => props.theme.colors["purple-400"]};
  
=======
    background-color: ${props => props.theme.colors["purple-400"]};;
>>>>>>> 10ae8113e29d8ce20330a57393cbcce15d46b336
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