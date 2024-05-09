import * as S from './InputStyles';

type Props = {
    placeholder: string;
    type: string;
}
export function Input ({type, placeholder}:Props){
    return (
        <S.Input type={type} placeholder={placeholder} />
    )
}