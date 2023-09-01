const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente');

        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="m-3 bg-white shadow-md rounded-xl px-5 py-10 flex">
            <div className="w-full">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre:{' '}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Proprietario:{' '}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha:{' '}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Síntomas:{' '}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>
            </div>
            <div className="flex w-full justify-end">
                <div className="flex flex-col">
                    <button
                        type="button"
                        className="py-2 px-10 mt-8 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-3xl"
                        onClick={() => setPaciente(paciente)}
                    > Editar
                    </button>

                    <button
                        type="button"
                        className="py-2 px-10 mt-5 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-3xl"
                        onClick={handleEliminar}
                    > Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pacientes