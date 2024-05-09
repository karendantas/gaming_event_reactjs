import * as S from './ButtonStyles';

type Props = {
    title: string;
}

export function Button ({title}:Props){
    return(
        <S.ButtonContainer>
            <S.Button type='submit'>{title} </S.Button>
        </S.ButtonContainer>
    )
}