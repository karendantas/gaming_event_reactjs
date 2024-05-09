import * as S from './SelectStyles';

interface Options {
    value: string
    name: string
}

type Props = {
    name: string;
    options: Options[]
}

export function Select ({name, options}:Props){
    return (
        <S.Select name={name} >
            <option value='' disabled>  Selecione um jogo </option>
            {options.map( (option)=>(
                <option value ={option.value}> {option.name}  </option>
            ))
            
            }
        </S.Select>
    )
}