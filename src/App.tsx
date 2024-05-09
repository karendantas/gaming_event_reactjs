import * as S from './AppStyles';

import { Input } from './components/Input';

function App() {

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
          <S.Form>
            <h1>FORMULÁRIO</h1>
            <S.FormGroup>
              <Input type = "text" placeholder="Nome" />
            </S.FormGroup>

            <S.FormGroup>
              <Input type = "text" placeholder="Login" />
            </S.FormGroup>

            <S.FormGroup>
              <Input type = "email" placeholder="Email" />
            </S.FormGroup>

            <S.FormGroup>
              <Input type = "password" placeholder="Senha" />
            </S.FormGroup>

          </S.Form>
        </S.FormContent>
      </S.FormContainer>
    </S.MainContainer>
  )
}

export default App
