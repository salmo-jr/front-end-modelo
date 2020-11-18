import React from 'react';
import Formulario from '../../componentes/Formulario/Formulario';
import formCadastro from './formularioCadastro.json';

const cadastroCliente = () => {
    return(
        <Formulario info={formCadastro} />
    );
}

export default cadastroCliente;