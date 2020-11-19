import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CadastroCliente from './paginas/CadastroCliente/CadastroCliente';
import Home from './paginas/Home/Home';

const routes = () => {
    return(
        <Switch>
            <Route path='/cadastroCliente'>
                <CadastroCliente />
            </Route>
            <Route path='/cardapio'>
                <CadastroCliente />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    );
}

export default routes;