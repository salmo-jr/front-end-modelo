import React, { Component } from 'react';
import api from '../../api';

class Produtos extends Component{
    state = {
        produtos: []
    }

    getProdutos = async () => {
        const resultado = await api.get('/clients');
        this.setState({produtos: resultado.data});
    }

    componentDidMount(){
        this.getProdutos();
    }

    render(){
        return(
            <div>
                {
                    this.state.produtos.map((produto, chave) => {
                        return <p key={chave}>{produto.name}</p>
                    })
                }
            </div>
        );
    }
}

export default Produtos;