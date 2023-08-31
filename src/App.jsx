import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListadiPacientes from './Components/ListadoPaciente'
import {useState} from "react";

function App() {
    const [pacientes, setPacientes] = useState([]);

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
            setPacientes={setPacientes}
        />
        <ListadiPacientes />
      </div>
    </div>
  )
}

export default App
