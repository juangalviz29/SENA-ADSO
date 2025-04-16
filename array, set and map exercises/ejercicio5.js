const productsVendidos = new Set([1001, 1002, 1003]);

const verificarProducto = (codigo) => {
    return productsVendidos.has(codigo);
};

console.log(verificarProducto(1005)); 
console.log(verificarProducto(1006)); 