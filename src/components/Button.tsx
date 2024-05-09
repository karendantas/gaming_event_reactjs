import * as S from './ButtonStyles';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;

}

export function Button ({title}:Props){
    return(
        <S.ButtonContainer>
            <S.Button type='submit'>{title} </S.Button>
        </S.ButtonContainer>
    )
}