const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.static('public'));

// Para que el servidor pueda entender los datos que le enviemos desde formularios o vistas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Conexión a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '4life_proyecto',
    port: 3307
});

// LEER TODOS LOS PRODUCTOS
app.get('/productos', (req, res) => {
    conexion.query('SELECT * FROM productos', (error, filas) => {
        if (error) return res.send("Error al leer los productos");
        res.json(filas);
    });
});

// 2. CREAR UN NUEVO PRODUCTO 
app.post('/productos/crear', (req, res) => {
    // Recibimos los datos que vienen del formulario
    const { nombre, precio, puntos, stock } = req.body;
    
    const sql = 'INSERT INTO productos (nombre, precio, puntos, stock) VALUES (?, ?, ?, ?)';
    conexion.query(sql, [nombre, precio, puntos, stock], (error, resultado) => {
        if (error) return res.send("Error al crear el producto");
        res.send("Producto creado con éxito");
    });
});

// 3. MODIFICAR UN PRODUCTO
app.put('/productos/editar/:id', (req, res) => {
    const id = req.params.id; // Agarramos el ID desde la URL
    const { nombre, precio, puntos, stock } = req.body;

    const sql = 'UPDATE productos SET nombre = ?, precio = ?, puntos = ?, stock = ? WHERE id_producto = ?';
    conexion.query(sql, [nombre, precio, puntos, stock, id], (error, resultado) => {
        if (error) return res.send("Error al actualizar el producto");
        res.send("Producto actualizado con éxito");
    });
});

// 4. ELIMINAR UN PRODUCTO 
app.delete('/productos/borrar/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM productos WHERE id_producto = ?';
    conexion.query(sql, [id], (error, resultado) => {
        if (error) return res.send("Error al eliminar el producto");
        res.send("Producto eliminado con éxito");
    });
});

// Servidor escuchando
app.listen(3000, () => {
    console.log("Servidor completo corriendo en el puerto 3000");
});