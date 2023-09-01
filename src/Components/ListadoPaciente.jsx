import Pacientes from "./Pacientes";

const ListadoPaciente = ({pacientes, setPaciente}) => {
    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center mt-6">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Administras tus {' '}
                        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
                    </p>
                    {pacientes.map( paciente =>(
                        <Pacientes
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ):(
                <div className="h-[60%] w-auto flex flex-col text-center justify-center mt-6 mb-4 p-2">
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Comienza agregando pacientes {' '}
                        <span className="font-bold text-indigo-600">y apareceran en este lugar</span>
                    </p>
                </div>
            )}

            
        </div>
    )
}

export default ListadoPaciente