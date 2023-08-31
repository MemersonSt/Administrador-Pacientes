function Pacientes() {
    return (
        <div className="m-3 bg-white shadow-md rounded-xl px-5 py-10 ">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:{' '}
                <span className="font-normal normal-case">Nina</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Proprietario:{' '}
                <span className="font-normal normal-case">Emerson</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha:{' '}
                <span className="font-normal normal-case">12/05/2023</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas:{' '}
                <span className="font-normal normal-case">Hooks</span>
            </p>
        </div>
    )
}

export default Pacientes