import express from 'express'
import { createEmpleado, getAllEmpleados } from '../controllers/EmpleadoController.js'
const router = express.Router()

router.get('/empleado', getAllEmpleados)
router.post('/empleado', createEmpleado)

export default router
