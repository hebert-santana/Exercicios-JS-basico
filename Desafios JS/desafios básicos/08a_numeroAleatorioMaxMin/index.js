function geraNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(geraNumeroAleatorio(50, 75))