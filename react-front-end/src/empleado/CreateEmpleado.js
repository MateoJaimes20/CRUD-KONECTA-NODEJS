import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const URI = 'http://localhost:8000/konecta/empleado/'

const CompCreateEmpleado = () => {

    const [fecha_ingreso, setFecha] = useState('')
    const [nombre, setNombre] = useState('')
    const [salario, setSalario] = useState('')
    const navigate = useNavigate()
    
    //PROCEDIMIENTO DE GUARDAR

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {fecha_ingreso:fecha_ingreso, nombre:nombre, salario:salario})
        navigate('/')
    }

    return(
        <div className="container">
            <h1>REGISTRO</h1>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Fecha de Ingreso</label>
                    <input 
                        value={fecha_ingreso}
                        onChange={ (e)=> setFecha(e.target.value)}
                        type='date'
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <input 
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)}
                        type='text'
                        placeholder="Nombre"
                        maxLength={50}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <input 
                        value={salario}
                        onChange={ (e)=> setSalario(e.target.value)}
                        type='number'
                        placeholder="Salario"
                        maxLength={10}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-regular fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}

export default CompCreateEmpleado