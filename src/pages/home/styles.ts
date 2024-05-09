import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 100rem;
    width: 100%;
    height: 100vh;

    padding: 0 2rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 950px ) {
        height: 100%;
        flex-direction: column;
        padding: 2rem 0;
        
    }
    
`;

export const InfosContainer = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 500;
    color: var(--brown-700);

    h1{
        font-size: 7rem;
        font-weight: 900;

        @media (max-width: 550px){
            font-size: 5rem;
        }
    }
    h1>span{ color: var(--yellow-500)}
    p {
        margin: 1rem 1rem 1rem 0;
        font-size: 1.5rem;
        width: 80%;
        text-align: justify;

        @media (max-width: 950px) {
            text-align: center;
        }
        @media (max-width: 550px){
            width: 90%; 
            margin: 1rem 0 1rem 0;
        
        }
    }

    @media (max-width: 950px){
        align-items: center;
    }

    @media (max-width: 550px){
        width:90%;
    }
`;

export const InfosContent = styled.div`
    display: flex;
    gap: 1rem;

    div{
        display: flex;
        align-items: center;
        gap: 1rem;

    }

    div > p { font-size: 1.5rem;}
    div i{
        font-size: 2rem;
        color: var(--yellow-500)
    }

    @media (max-width: 550px){
            flex-direction: column;
            gap: 0;
        }

`;

export const FormContainer = styled.div`
    width:  37.5rem ; /* 600px */
    height: 50rem ; /* 800px */

    background-color: var(--yellow-500);
    border: 5px solid var(--brown-700);

    border-radius: 20px;
    border-bottom-right-radius:60px ;
    border-bottom-left-radius:60px ;

    display: flex;
    justify-content: center;
    position: relative;

    @media (max-width:550px){
        width: 90%;
    }
`;

export const FormContent = styled.div`
    height: calc(75% + 15px);
    width: calc(90% + 15px);

    margin-top: 2rem;
    border: 15px solid var(--brown-700);
    border-radius: 5px;
    background-color: var(--white-100);
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 2.5rem;

    h1{ color: var(--purple-400); }
    
`;

export const FormGroup = styled.form`
    width: 90%;
    height: 3.5rem;

    span {
        margin-left: 10px;
        font-size: 0.875rem;
        color: var(--red-400);

    }
`