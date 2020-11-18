import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './paginas/Home/Home';
import CadastroCliente from './paginas/CadastroCliente/CadastroCliente';
import Cardapio from './paginas/Cardapio/Cardapio';

const routes = () => {
    return(
        <Switch>
          <Route path='/cadastroCliente'>
            <CadastroCliente />
          </Route>
          <Route path='/cardapio'>
            <Cardapio />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
    );
}

export default routes;