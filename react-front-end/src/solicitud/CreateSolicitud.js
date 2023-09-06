import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const URI = 'http://localhost:8000/konecta/solicitud/'

const CompCreateSolicitud = () => {

    const [codigo, setCodigo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [resumen, setResumen] = useState('')
    const [id_empleado, setEmpleados] = useState('')
    const navigate = useNavigate()
    
    //PROCEDIMIENTO DE GUARDAR

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {codigo:codigo, descripcion:descripcion, resumen:resumen, id_empleado:id_empleado})
        navigate('/')
    }


    return(
        <div className="container">
            <h1>REGISTRO</h1>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">CODIGO</label>
                    <input 
                        value={codigo}
                        onChange={ (e)=> setCodigo(e.target.value)}
                        maxLength={50}
                        type='text'
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">DESCRIPCION</label>
                    <input 
                        value={descripcion}
                        onChange={ (e)=> setDescripcion(e.target.value)}
                        type='text'
                        placeholder="Ej: Me haran una cirugia el proximo dd/mm/yyyy, para pedir dias habiles"
                        maxLength={50}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">RESUMEN</label>
                    <input 
                        value={resumen}
                        onChange={ (e)=> setResumen(e.target.value)}
                        type='text'
                        placeholder="Ej: Pido dias de permido por cirugia"
                        maxLength={50}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">EMPLEADO</label>
                    <input 
                        value={id_empleado}
                        onChange={ (e)=> setEmpleados(e.target.value)}
                        type='number'
                        placeholder="Escriba su id"
                        maxLength={50}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-regular fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}

export default CompCreateSolicitud;