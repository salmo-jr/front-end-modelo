import React from 'react';
import Campo from './Campo';
import ClientContext from '../../context/ClientContext';

const formulario = (props) => {
    return(
        <ClientContext.Consumer>
            {context => {
                return(
                    <form onSubmit={context.create} action='/'>
                        <h1>{props.info.titulo}</h1>
                        {
                            props.info.campos.map((campo, i) => {
                                return (
                                    <Campo key={i} especificacao={campo} />
                                )
                            })
                        }
                        <button type='submit'>Enviar</button>
                    </form>
                );
            }}
        </ClientContext.Consumer>
        
    );
}

export default formulario;