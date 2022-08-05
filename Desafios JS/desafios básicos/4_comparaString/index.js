function comparaString (text, flag = 'start') {
    let aviso = 'deu erro!'

    if (flag === 'start') {
        return text.slice(0, 3);
    } else if (flag === 'end') {
        return text.slice(-3);
    } else if (text.lenght < 3) {
        return text;
    } else {
        return aviso;
    }
}

console.log(comparaString('abcdefg', 'start'));
console.log(comparaString('abcdefg', 'end'));
console.log(comparaString('ab', 'end'));
console.log(comparaString('abcdefg'));

