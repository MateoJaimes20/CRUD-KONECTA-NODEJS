//CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//SEQUELIZE
import { DataTypes } from "sequelize";

const SolicitudModel = db.define('solicitudes', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    codigo: {type: DataTypes.STRING},
    descripcion: {type: DataTypes.STRING},
    resumen: {type: DataTypes.STRING},
    id_empleado: {type: DataTypes.INTEGER},
},{timestamps: false})

export default SolicitudModel