const { validarProducto } = require('./validaciones');

test('rechaza un producto con precio menor o igual a 0', () => {
    const resultado = validarProducto(0, 10);
    expect(resultado.valido).toBe(false);
});

test('rechaza un producto con stock menor o igual a 0', () => {
    const resultado = validarProducto(50000, 0);
    expect(resultado.valido).toBe(false);
});

test('acepta un producto con precio y stock válidos', () => {
    const resultado = validarProducto(240000, 20);
    expect(resultado.valido).toBe(true);
});