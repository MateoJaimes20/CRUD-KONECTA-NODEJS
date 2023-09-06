import express from "express";
import cors from "cors";
import db from "./database/db.js";

import empleadoRoutes from './routes/routesEmpleado.js'
import solicitudRoutes from './routes/routesSolicitud.js'

const app = express()

app.use(cors());
app.use(express.json());
app.use("/konecta", empleadoRoutes);
app.use("/konecta", solicitudRoutes);

app.get("/", (req, res) => {
    res.send("Server On");
});

try {
    await db.authenticate()
    console.log("Conexion exitosa");
} catch (error) {
    console.log(`El error de conexion es: ${error}`);
}

app.listen(8000, () => {
  console.log("server on port http://localhost:8000/");
});