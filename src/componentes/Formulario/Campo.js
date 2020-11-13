import React from 'react';

const campo = (props) => {
    let input;

    switch(props.especificacao.type){
        case 'select':
            input = <select id={props.especificacao.id}></select>;
            break;
        default:
            input = <input type={props.especificacao.type} id={props.especificacao.id} />;
            break;
    }

    return(
        <div>
            <label htmlFor={props.especificacao.id}>{props.especificacao.label}: </label>
            {input}
        </div>
    );
}

export default campo;