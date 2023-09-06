-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.32 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para crud_konecta
CREATE DATABASE IF NOT EXISTS `crud_konecta` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `crud_konecta`;

-- Volcando estructura para tabla crud_konecta.empleados
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` date NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `salario` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla crud_konecta.empleados: ~5 rows (aproximadamente)
INSERT IGNORE INTO `empleados` (`id`, `fecha_ingreso`, `nombre`, `salario`) VALUES
	(1, '2019-10-15', 'Mateo Jaimes', 40000),
	(2, '2016-06-15', 'Monica Jaimes', 30000),
	(3, '2012-06-15', 'Julian Jaimes', 37000),
	(4, '2027-04-16', 'Jhon Castilla', 33000),
	(5, '2025-01-16', 'Carlos Tellez', 23000);

-- Volcando estructura para tabla crud_konecta.solicitudes
CREATE TABLE IF NOT EXISTS `solicitudes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `resumen` varchar(50) DEFAULT NULL,
  `id_empleado` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FKenviy9wr6qt0dc91b0sbney8v` (`id_empleado`),
  CONSTRAINT `FKenviy9wr6qt0dc91b0sbney8v` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla crud_konecta.solicitudes: ~3 rows (aproximadamente)
INSERT IGNORE INTO `solicitudes` (`id`, `codigo`, `descripcion`, `resumen`, `id_empleado`) VALUES
	(1, '001', 'Compra de la motocicleta', 'Necesito los papeles de la motocicleta', 4),
	(2, '002', 'Accesso al servidor', 'Necesito los clientes para hacer pruebas de campo', 2),
	(3, '003', 'Dias libres', 'Quiero pedir dias libres para irme de vacaciones', 5);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
