import Formulario from './componentes/formulario';
import ListaEstudiante from './componentes/listaestudiante';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <Formulario />
                <ListaEstudiante />
            </div>
        </div>
    );
};

export default App;

