import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/konecta/solicitud/'

const CompShowSolicitudes = () => {
    const [solicitudes, setSolicitud] = useState([])
    useEffect( () => {
        getSolicitudes()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR

    const getSolicitudes = async () => {
        const res = await axios.get(URI)
        setSolicitud(res.data)
    }

    return(
        <div className="container">
            <div className="row"><h1>Lista de Solicitudes</h1></div>
            <table className="table table-striped table-bordered">
                <thead className="table table-striped table-hover">
                    <tr>
                        <th>ID</th>
                        <th>CODIGO</th>
                        <th>DESCRIPCION</th>
                        <th>RESUMEN</th>
                        <th>EMPLEADO</th>
                    </tr>
                </thead>
                <tbody>
                    { solicitudes.map ( (solicitud) => (
                        <tr key={ solicitud.id}>
                            <td> {solicitud.id} </td>
                            <td> {solicitud.codigo} </td>
                            <td> {solicitud.descripcion} </td>
                            <td> {solicitud.resumen} </td>
                            <td> {solicitud.id_empleado} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to='/createSolicitud' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
        </div>
    )
}

export default CompShowSolicitudes