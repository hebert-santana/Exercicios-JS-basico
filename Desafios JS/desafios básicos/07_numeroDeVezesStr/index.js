function numeroVezes(a, b) {
    let minusculo = b.toLowerCase();
    let posicao = minusculo.indexOf(a);

    for (var cont = 0; posicao != -1; cont++) {
        posicao = minusculo.indexOf(a, posicao + 1)
    }
    return cont;
}

console.log(numeroVezes('a', 'Quantas vezes o valor de "a" ocorre aqui?'));
console.log(numeroVezes('as', 'Quantas vezes o valor de "a" ocorre aqui?'));
console.log(numeroVezes('q', 'Quantas vezes o valor de "a" ocorre aqui?'));