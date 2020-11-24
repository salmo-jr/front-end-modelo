import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClientContext from './context/ClientContext';
import Routes from './Routes';

class App extends Component{
  state = {
    client: {
      name: '',
      cpf: '',
      email: '',
      phone: ''
    }
  }

  handleChangeClient = (event) => {
    const updateClient = {...this.state.client};
    updateClient[event.target.name] = event.target.value;
    this.setState({client: updateClient});
  }
  
  render(){
    return (
      <div className="App">
          <BrowserRouter>
            <ClientContext.Provider
              value={{
                client: this.state.client,
                change: this.handleChangeClient
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
