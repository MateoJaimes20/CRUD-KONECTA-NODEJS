import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/konecta/empleado/'

const CompShowEmpleados = () => {
    const [empleados, setEmpleado] = useState([])
    useEffect( () => {
        getEmpleados()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR

    const getEmpleados = async () => {
        const res = await axios.get(URI)
        setEmpleado(res.data)
    }

    return(
        <div className="container">
            <div className="row"><h1>Lista de empleados</h1></div>
            <table className="table table-striped table-bordered">
                <thead className="table table-striped table-hover">
                    <tr>
                        <th>ID</th>
                        <th>FECHA INGRESO</th>
                        <th>NOMBRE</th>
                        <th>SALARIO</th>
                    </tr>
                </thead>
                <tbody>
                    { empleados.map ( (empleado) => (
                        <tr key={ empleado.id}>
                            <td> {empleado.id} </td>
                            <td> {empleado.fecha_ingreso} </td>
                            <td> {empleado.nombre} </td>
                            <td> {empleado.salario} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to='/create' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
        </div>
    )
}

export default CompShowEmpleados
