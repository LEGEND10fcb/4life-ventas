function validarProducto(precio, stock) {
    if (precio <= 0) {
        return { valido: false, mensaje: 'El precio debe ser un número mayor a 0' };
    }
    if (stock <= 0) {
        return { valido: false, mensaje: 'El stock debe ser un número mayor a 0' };
    }
    return { valido: true, mensaje: 'Producto válido' };
}

module.exports = { validarProducto };