import React from 'react';
import { Link } from 'react-router-dom';

const headerPage = () => {
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/cadastroCliente'>Cadastro de Clientes</Link>
            </nav>
        </header>
    );
}

export default headerPage;