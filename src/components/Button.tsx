import * as S from './ButtonStyles';

type Props = {
    title: string;
    onClick?: () => void;

}

export function Button ({title, onClick}:Props){
    return(
        <S.ButtonContainer>
            <S.Button onClick={onClick} type='submit'>{title}  </S.Button>
        </S.ButtonContainer>
    )
}