//IMPORTAMOS EL MODELO
import EmpleadoModel from "../models/EmpleadoModel.js";

//METODOS DEL CRUD
export const getAllEmpleados = async(req, res) => {
    try {
        const empleados = await EmpleadoModel.findAll()
        res.json(empleados)
    } catch (error) {
        res.json({message: error.message})
    }
}

//CREAR EMPLEADO
export const createEmpleado = async(req, res) => {
    try {
        await EmpleadoModel.create(req.body);
        res.json({
            "message": "Empleado añadido"
        })
    } catch (error) {
        res.json({message: error.message});
    }
}
