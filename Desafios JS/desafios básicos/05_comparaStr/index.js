function comparaStr (fullname, flag = ' ') {
    let arrayNome = fullname.split(' ') // ['Hebert', 'Fernandes', 'Santana']
    if (flag === 'firstname') {
        return arrayNome[0];
    } else if (flag === 'lastname' && arrayNome.length >= 2) {
        arrayNome.shift();
        return arrayNome.join(" ");       
    } else if (flag === ' ' || arrayNome.length < 2) {
        return fullname
    }
}

console.log(comparaStr('Hebert Fernandes Santana', 'firstname'));
console.log(comparaStr('Hebert Fernandes Santana', 'lastname'));
console.log(comparaStr('Hebert Fernandes Santana'));
console.log(comparaStr('Hebert', 'lastname'));