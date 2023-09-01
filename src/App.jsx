import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListadoPacientes from './Components/ListadoPaciente'
import {useEffect, useState} from "react";

function App() {
    const [pacientes, setPacientes] = useState([]); //Aqui es donde se guarda el estado de los pacientes con un arreglo vacio de useState
    const [paciente, setPaciente] = useState({});

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
        />
        <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
