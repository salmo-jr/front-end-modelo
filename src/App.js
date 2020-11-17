import Formulario from './componentes/Formulario/Formulario';
import Perfil from './componentes/Perfil/Perfil';
import FormCadastro from './formularioCadastro.json';
import PerfilDados from './perfil.json';
import FotoPerfil from './assets/foto.jpg';

function App() {
  return (
    <div className="App">
        <div>Cabeçalho</div>
        
        {/* <Formulario info={FormCadastro} /> */}

        <Perfil foto={FotoPerfil} pessoais={PerfilDados} />
        
        <div>Rodapé</div>
    </div>
  );
}

export default App;
