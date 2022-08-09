function tipoDoArgumento (a) {
    return typeof(a)
}

console.log(tipoDoArgumento(1));
console.log(tipoDoArgumento(false));
console.log(tipoDoArgumento({}));
console.log(tipoDoArgumento(null));
console.log(tipoDoArgumento('string'));
console.log(tipoDoArgumento(['array']));