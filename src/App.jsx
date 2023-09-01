import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListadoPacientes from './Components/ListadoPaciente'
import {useState, useEffect} from "react";

function App() {
    const [pacientes, setPacientes] = useState([]); //Aqui es donde se guarda el estado de los pacientes con un arreglo vacio de useState
    const [paciente, setPaciente] = useState({});

  //guardar los datos en el localstorage
    useEffect(() => {
      const obtener = () => {
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacientesLS)
      } 
      obtener();
    }, [])  

    useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes])

    const eliminarPaciente = (id) => {
      const pacientesActualizado = pacientes.filter( paciente => paciente.id !== id);
      setPacientes(pacientesActualizado)
    }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
        />
        <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
