function comparaArgumento (a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

console.log(comparaArgumento(2, 3));
console.log(comparaArgumento(3, 3));
console.log(comparaArgumento(1, '1'));
console.log(comparaArgumento('10', '10'));