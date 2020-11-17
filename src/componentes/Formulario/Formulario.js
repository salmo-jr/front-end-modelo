import React from 'react';
import Campo from './Campo';

const formulario = (props) => {
    return(
        <form>
            <h1>{ props.info.titulo }</h1>
            {
                props.info.campos.map((campo, i) => {
                    return (
                        <Campo key={i} especificacao={campo} />
                    )
                })
            }
        </form>
    );
}

export default formulario;