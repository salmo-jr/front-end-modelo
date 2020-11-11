import React from 'react';

const formulario = (props) => {
    return(
        <form>
            <h1>{ props.titulo }</h1>
            <div>Campos</div>
        </form>
    );
}

export default formulario;