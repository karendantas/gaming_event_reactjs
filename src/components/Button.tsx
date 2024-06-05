import * as S from './ButtonStyles';

interface ButtonProps {
    title: string;
    onClick?: () => void;
    disabled?: boolean

}

export function Button ({title, onClick, disabled}: ButtonProps){
    return(
        <S.ButtonContainer>
            <S.Button onClick={onClick} type='submit' disabled={disabled}>{title} </S.Button>
        </S.ButtonContainer>
    )
}