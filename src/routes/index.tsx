import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/home';
import { ConfirmationPage } from '../pages/confirmation/confirmation';

export default function AppRoutes (){
    return (
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/confirmation' element = {<ConfirmationPage/>}/>
        </Routes>
    )
}