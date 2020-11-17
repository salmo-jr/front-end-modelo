import React from 'react';

const campo = (props) => {
    let input;

    switch(props.especificacao.type){
        case 'select':
            input = <select {...props.especificacao.atributos}>
                { props.especificacao.opcoes.map((opt, i) => {
                    return(
                        <option key={opt.value + i} value={opt.value}>
                            {opt.legend}
                        </option>
                    )
                })}
            </select>;
            break;
        default:
            input = <input type={props.especificacao.type} {...props.especificacao.atributos} />;
            break;
    }

    return(
        <div>
            <label htmlFor={props.especificacao.atributos.id}>{props.especificacao.label}: </label>
            {input}
        </div>
    );
}

export default campo;