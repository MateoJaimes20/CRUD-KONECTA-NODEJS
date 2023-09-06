import express from 'express'
import {createSolicitud, getAllSolicitudes} from '../controllers/SolicitudController.js'
const router = express.Router()

router.get('/solicitud', getAllSolicitudes)
router.post('/solicitud', createSolicitud)

export default router