import Formulario from './componentes/Formulario/Formulario';
import Perfil from './componentes/Perfil/Perfil';
import Produtos from './componentes/Produtos/Produtos';
import PerfilDados from './perfil.json';
import FotoPerfil from './assets/foto.jpg';
import { BrowserRouter, Link } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <Routes />
        <div>Rodapé</div>
      </BrowserRouter>
        
        
        {/* <Formulario info={FormCadastro} />
        <Perfil foto={FotoPerfil} pessoais={PerfilDados} />
        <Produtos /> */}
        
    </div>
  );
}

export default App;
