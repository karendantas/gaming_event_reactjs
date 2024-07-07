import * as S from './ButtonStyles';

interface ButtonProps {
    title: string;
    onClick?: () => void;
    disabled?: boolean

}

export function Button ({title, onClick}: ButtonProps){
    return(
        <S.ButtonContainer>
            <S.Button onClick={onClick} type='submit'>{title}  </S.Button>
        </S.ButtonContainer>
    )
}