import React from 'react';
import { Link } from 'react-router-dom';

const cabecalho = () => {
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/cadastroCliente'>Cadastro de Clientes</Link>
                <Link to='/cardapio'>Cardápio</Link>
            </nav>
        </header>
    );
}

export default cabecalho;