import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CadastroCliente from './paginas/CadastroCliente/CadastroCliente';
import Home from './paginas/Home/Home';

const routes = () => {
    return(
        <Switch>
            <Route path='/cadastroCliente'>
                <CadastroCliente  path='/cadastroCliente' />
            </Route>
            <Route path='/cardapio'>
                <CadastroCliente path='/cardapio' />
            </Route>
            <Route path='/'>
                <Home path='/' />
            </Route>
        </Switch>
    );
}

export default routes;