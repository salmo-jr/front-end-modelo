import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import HeaderPage from './componentes/HeaderPage/HeaderPage';
import Perfil from './componentes/Perfil/Perfil';
import PerfilDados from './perfil.json';
import FotoPerfil from './assets/foto.jpg';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <HeaderPage />
          <Routes />
          <div>Rodapé</div>
        </BrowserRouter>
    </div>
  );
}

export default App;
