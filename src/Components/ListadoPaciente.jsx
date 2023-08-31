import Pacientes from "./Pacientes"

function ListadoPaciente(){
    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-5 text-center">
                Administras tus {' '}
                <span className="font-bold text-indigo-600">Pacientes y Citas</span>
            </p>
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
        </div>
    )
}

export default ListadoPaciente