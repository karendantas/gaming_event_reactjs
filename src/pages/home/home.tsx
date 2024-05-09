import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';

import {useNavigate} from 'react-router-dom';

import * as S from './styles';

import { Button } from '../../components/Button';


//Definindo a representação do formulário e validações
const createUserFormSchema = z.object ({
  name: z.string().min(1, 'Nome não pode estar vazio!'),
  login: z.string().min(3, 'Login deve ter mais de 3 letras!' ),
  email: z.string().min(1,'Email não pode estar vazio').email('Email inválido!'),
  password: z.string().min(6, 'Senha deve ter mais de 6 letras!'),
  games: z.enum(['league of legends','valorant','csgo'], { errorMap: ()=> 
    ({ message: 'Selecione uma opção'}) 
    }),
})

//Criando uma tipagem com base na representação
type createUserFormData = z.infer<typeof createUserFormSchema> 

export function Home (){
    const StorageKey = 'userData';
    const navigate = useNavigate();

    const { register, 
            handleSubmit, 
            reset,
            formState: {errors} 
          } = useForm<createUserFormData> ({
      resolver: zodResolver(createUserFormSchema)
    });

    function OnSubmitForm(data:createUserFormData){
      try {
        localStorage.setItem(StorageKey, JSON.stringify(data))
      }catch(error){
        console.log("Não foi possível salvar", error)
      }
      navigate('/confirmation');

      reset({
        name: '',
        email: '',
        login:'',
        password: '',
        games: undefined,
      });
    }
  
    return (
        <S.MainContainer>
        <S.InfosContainer>
          <h1>E<span>Z</span>PORT</h1>
          <S.InfosContent> 
            <div> 
                <i className="ph ph-map-pin"></i>
                <p>Pau dos Ferros, RN</p>
            </div>
            <div> 
                  <i className="ph ph-calendar"></i>
                  <p>08/05/2025</p>
            </div> 
  
          </S.InfosContent>
            <p>Acesse o formulário e garanta uma vaga no maior concurso de jogos do Brasil e concorra a prêmios incríveis!</p>
        </S.InfosContainer>
  
        <S.FormContainer>
          <S.FormContent>
            <S.Form onSubmit={handleSubmit(OnSubmitForm)}>
              <h1>FORMULÁRIO</h1>
              <S.FormGroup>
                  <S.Input type='text' placeholder='Nome' {...register('name')} />
                  {errors.name && <span> {errors.name.message} </span>}
              </S.FormGroup>
  
              <S.FormGroup>
                <S.Input type='text' placeholder='Login' {...register('login')} />
                {errors.login && <span> {errors.login.message} </span>}
              </S.FormGroup>
  
              <S.FormGroup>
                <S.Input type='email' placeholder='Email' {...register('email')} />
                {errors.email && <span> {errors.email.message} </span>}
              </S.FormGroup>
  
              <S.FormGroup>
                <S.Input type='password' placeholder='Senha' {...register('password')} />
                {errors.password && <span> {errors.password.message }</span>}
              </S.FormGroup>
  
              <S.FormGroup>
                  <S.Select {...register('games')}>
                      <option value="" disabled selected> Selecione um jogo</option>
                      <option value="league of legends">League of legends</option>
                      <option value="valorant"> Valorant </option>
                      <option value="csgo">CsGo</option>
                  </S.Select>
                  {errors.games && <span> {errors.games.message} </span>}
              </S.FormGroup>

              <Button title = "JOGAR"/>
            </S.Form>
          </S.FormContent>
        </S.FormContainer>
      </S.MainContainer>
    )
}