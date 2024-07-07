import styled from 'styled-components';

export const ButtonContainer = styled.div`
    position: absolute;
    z-index: 99;
    bottom: 3rem;
`;


export const Button = styled.button`
    border: 4px solid var(--brown-700);
    width: 10rem;
    height: 4rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    background-color: var(--purple-400);
    font-size: 1.25rem;
    color: var(--white-100);
`;