import React from 'react';
import ClientContext from '../../context/ClientContext';

const campo = (props) => {
    let input;

    switch(props.especificacao.type){
        case 'select':
            input = 
            <ClientContext.Consumer>
                { context => {
                    return(
                        <select {...props.especificacao.atributos} onChange={context.change}>
                            { props.especificacao.opcoes.map((opt, i) => {
                                return (
                                    <option key={opt.value + i} value={opt.value}>
                                        {opt.legend}
                                    </option>
                                )
                            })}
                        </select>
                    );
                }}
            </ClientContext.Consumer>;
            break;
        default:
            input =
                <ClientContext.Consumer>
                    {context => {
                        return(
                            <input
                                type={props.especificacao.type}
                                {...props.especificacao.atributos}
                                onChange={context.change}
                            />
                        );
                    }}
                </ClientContext.Consumer>;
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