CREATE DATABASE 4life_proyecto;
USE 4life_proyecto;
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    puntos INT NOT NULL,
    stock INT NOT NULL
);

INSERT INTO productos (nombre, precio, puntos, stock) VALUES 
('4Life Transfer Factor Plus', 240000.00, 50, 20),
('4Life Transfer Factor RioVida', 180000.00, 35, 15);

SELECT * FROM productos;