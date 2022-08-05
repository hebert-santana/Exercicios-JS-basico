function operacoes (a, b, c, d, e, f) {
    let soma = a + b;
    let subtracao = soma - c;
    let multiplica = subtracao * d;
    let divide = multiplica / e;
    let potencia = divide ** f;
    return potencia
}

console.log(operacoes(6, 5, 4, 3, 2, 1));
console.log(operacoes(6, 2, 1, 4, 2, 3));
console.log(operacoes(2, 3, 6, 4, 2, 3));