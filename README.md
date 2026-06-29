# 4Life Ventas - Sistema de Gestión de Inventario

Evidencia: **GA7-220501096-AA5-EV03**
Diseño y desarrollo de servicios web – proyecto.

## Descripción

Este proyecto es el backend del sistema de ventas e inventario de 4Life,
desarrollado con Node.js, Express y MySQL. Expone un conjunto de servicios
web (API) que permiten gestionar el catálogo de productos: consultar,
registrar, actualizar y eliminar.

## Tecnologías

- Node.js
- Express
- MySQL (mysql2)

## Base de datos

Base de datos: `4life_proyecto`

```sql
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    puntos INT NOT NULL,
    stock INT NOT NULL
);
```

## Servicios (Endpoints)

### GET `/productos`
Consulta todos los productos registrados en el inventario.

**Respuesta exitosa (200):** arreglo JSON con todos los productos.

```json
[
  {
    "id_producto": 1,
    "nombre": "4Life Transfer Factor",
    "precio": "230000.00",
    "puntos": 50,
    "stock": 20
  }
]
```

### POST `/productos/crear`
Registra un nuevo producto en el inventario.

**Cuerpo de la petición (JSON):**
```json
{
  "nombre": "4Life Transfer Factor",
  "precio": 230000,
  "puntos": 50,
  "stock": 20
}
```

**Respuestas posibles:**
- `200` → "Producto creado con éxito"
- `500` → "Error al crear el producto"

### PUT `/productos/editar/:id`
Actualiza los datos de un producto existente, identificado por su `id_producto`.

**Cuerpo de la petición (JSON):**
```json
{
  "nombre": "4Life Transfer Factor",
  "precio": 250000,
  "puntos": 55,
  "stock": 18
}
```

**Respuestas posibles:**
- `200` → "Producto actualizado con éxito"
- `500` → "Error al actualizar el producto"

### DELETE `/productos/borrar/:id`
Elimina un producto del inventario, identificado por su `id_producto`.

**Respuestas posibles:**
- `200` → "Producto eliminado con éxito"
- `500` → "Error al eliminar el producto"

## Cómo ejecutar el proyecto

```bash
npm install
node server.js
```

El servicio queda disponible en: `http://localhost:3000`
