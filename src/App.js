import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClientContext from './context/ClientContext';
import Routes from './Routes';
import api from './api';

class App extends Component{
  state = {
    client: {
      name: '',
      cpf: '',
      email: '',
      phone: ''
    },
    products: []
  }

  handleChangeClient = (event) => {
    const updateClient = {...this.state.client};
    updateClient[event.target.name] = event.target.value;
    this.setState({client: updateClient});
  }

  createClient = async (event) => {
    const resp = await api.post('/clients', this.state.client, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  listProduct = async () => {
    const resp = await api.get('/products', {
      headers: {
        'Authorization': 'ti-ara-2019'
      }
    });
    this.setState({products: resp['data']});
  }

  componentDidMount(){
    this.listProduct();
  }
  
  render(){
    return (
      <div className="App">
          <BrowserRouter>
            <ClientContext.Provider
              value={{
                client: this.state.client,
                products: this.state.products,
                change: this.handleChangeClient,
                create: this.createClient
              }}
            >
              <Routes />
              <div>Rodapé</div>
            </ClientContext.Provider>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
