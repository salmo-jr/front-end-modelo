import React from 'react';
import HeaderPage from '../../componentes/HeaderPage/HeaderPage';
import Formulario from '../../componentes/Formulario/Formulario';
import formCadastro from './formularioCadastro.json';

const cadastroCliente = (props) => {
    return(
        <div>
            <HeaderPage navActive={props.path} />
            <Formulario info={formCadastro} />
        </div>
    );
}

export default cadastroCliente;
