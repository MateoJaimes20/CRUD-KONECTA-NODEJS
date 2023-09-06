//IMPORTAMOS EL MODELO
import SolicitudModel from "../models/solicitudModel.js";

//METODOS DEL CRUD
export const getAllSolicitudes = async(req, res) => {
    try {
        const solicitudes = await SolicitudModel.findAll()
        res.json(solicitudes)
    } catch (error) {
        res.json({message: error.message})
    }
}

//CREAR SOLICITUD
export const createSolicitud = async(req, res) => {
    try {
        await SolicitudModel.create(req.body);
        res.json({
            "message": "Solicitud añadida"
        })
    } catch (error) {
        res.json({message: error.message});
    }
}