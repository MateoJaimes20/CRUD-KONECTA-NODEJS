//CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//SEQUELIZE
import { DataTypes } from "sequelize";

const EmpleadoModel = db.define('empleados', {
    id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    fecha_ingreso: {type: DataTypes.DATE},
    nombre: {type: DataTypes.STRING},
    salario: {type: DataTypes.DOUBLE},
},{timestamps: false})

export default EmpleadoModel