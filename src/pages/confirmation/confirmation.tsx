import { useNavigate } from 'react-router-dom';

import * as S from './styles'

import { StorageKey } from '../home/home'
import { Button } from '../../components/Button';


export function ConfirmationPage(){

    const navigate = useNavigate();
    const userData = localStorage.getItem(StorageKey);
    const {name, games} = userData && JSON.parse(userData) ;


    function handleGoBack (){
        navigate(-1)
    }
    return (
        <S.ConfirmationContainer>
            <S.ConfirmationContent>
                <h1>Olá, { name || 'Jogador' }</h1>
                <p>Voce foi convocado para batalhar no universo do {games || 'Seu jogo favorito'}!
                    Aperte o botão para confirmar sua inscrição e voce já estará participando do campeonato Ezport
                 </p>
                 <Button title = "Confirmar" onClick={ handleGoBack} />
            </S.ConfirmationContent>
        </S.ConfirmationContainer>
    )
}