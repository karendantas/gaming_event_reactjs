import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
    height: 100vh;

    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const ConfirmationContent = styled.div`
    width: 40rem;
    height: 30rem;
    background-color: var(--white-100);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem;
    h1{
        font-size: 3rem;
    }
    p{
        font-size: 1.3rem;
        text-align: center;
    }

    @media (max-width: 950px){
        width: 90%;
    }
    @media (max-width: 450px){
        h1{
            font-size: 2.4rem;
        }
        p{
            font-size: 1rem;
        }
    }

`

