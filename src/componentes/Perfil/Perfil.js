import React from 'react';
import classes from './Perfil.module.css';

const perfil = (props) => {
    return(
        <div>
            <h1 className="display-1">Perfil</h1>
            <div className={classes.DadosPessoais}>
                <figure>
                    <img src={props.foto} />
                </figure>
                <div>
                    <h2>Dados Pessoais</h2>
                    <div>
                        <label>Nome:</label>
                        <input type="text" value={props.pessoais.nome} />
                    </div>
                    <div>
                        <label>E-mail:</label>
                        <input type="email" value={props.pessoais.email} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" value={props.pessoais.senha} />
                    </div>
                    <div>
                        <label>CPF:</label>
                        <input type="text" value={props.pessoais.cpf} />
                    </div>
                    <div>
                        <label>Telefone:</label>
                        <input type="tel" value={props.pessoais.telefone} />
                    </div>
                    <div>
                        <label>Celular:</label>
                        <input type="tel" value={props.pessoais.celular} />
                    </div>
                </div>
            </div>
            <div>
                <h2>Endereço</h2>
            </div>
        </div>
    );
}

export default perfil;