import {useState} from 'react'

// eslint-disable-next-line react/prop-types
function Formulario ({pacientes, setPacientes}){
    const [error, setError] = useState(false)// El primer valor es el estado y el segundo es la funcion que lo modifica y sirve para cambiar el valor del estado
    const [nombre, setNombre] = useState('')//El primer valor es el estado y el segundo es la funcion que lo modifica y sirve para cambiar el valor del estado
    const [propietario, setPropietario] = useState('')
    const [fecha, setFecha] = useState('')
    const [email, setEmail] = useState('')
    const [sintomas, setSintomas] = useState('')

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const feacha = Date.now().toString(36);

        return random + feacha;
    }

    const handleSubmit = e => { //Esta funcion se ejecuta cuando se envia el formulario
        e.preventDefault()//Evita que se recargue la pagina

        //Dentro del handleSubmit se debe de validar que los campos no esten vacios
        if([nombre, propietario, fecha, email, sintomas].includes('')){
            setError(true)// Aqui se cambia el valor del estado
            return
        }

        setError(false)

        //construir un objeto con los datos
        const objetoPacientes = {
            nombre,
            propietario,
            fecha,
            email,
            sintomas,
            id: generarId()
        }

        setPacientes([...pacientes, objetoPacientes])
        /**
         * Aqui se esta agregando un nuevo objeto al arreglo de pacientes con el spread operator y el objetoPacientes
         * El spread operator sirve para copiar el arreglo y agregarle un nuevo elemento al final del arreglo
         * El spread operator se usa de la siguiente manera [...arreglo, nuevoElemento]
         * El spread operator tambien se puede usar para copiar un objeto y agregarle un nuevo elemento
         */

        //Reiniciar el formulario
        setNombre('') //Aqui se reinicia el estado
        setPropietario('')
        setFecha('')
        setEmail('')
        setSintomas('')

    }
//Como recomendacion se debe de poner el estado en el formulario y no en el input
/**
 * ademas de que se debe de poner el value del input igual al estado y el onChange igual al estado para que se pueda modificar el estado
 * Tambien verificar que los campos se llenen correctamente en la consola
 */
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center ">Paciente Seguimiento</h2>
            <p className="text-center text-lg mt-5 mb-5">Añade Pacientes y {' '} <span className="text-indigo-600 font-bold">Administralos</span></p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl py-10 px-5 m-3"
            >
                {error ? <p className="text-red-500 text-xs mb-2 text-center">Todos los campos son obligatorios</p> : null}
                <div>
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor=""
                    >Nombre de la Mascota</label>
                    <input 
                        type="text"
                        placeholder="Nombre de la Mascota"
                        value={nombre}//Esta es la forma de obtener el valor de un estado
                        onChange={e => setNombre(e.target.value)} //Esta es la forma de cambiar el valor de un estado
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 mt-2"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="">Nombre del Dueño</label>
                    <input
                        type="text"
                        placeholder="Nombre del Dueño"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 mt-2"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="">Fecha</label>
                    <input
                        type="date"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 mt-2"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 mt-2"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="">Sintomas</label>
                    <textarea
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 mt-2"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    ></textarea>
                </div>
                <div className="w-full flex justify-center items-center">
                    <input 
                        type="submit"
                        className="bg-indigo-500 w-3/4 mt-5 p-2 rounded-xl text-white uppercase font-bold hover:bg-indigo-600"
                        value="Agregar Cita"
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario