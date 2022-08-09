function par (a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(par(10));
console.log(par(-4));
console.log(par(5));
console.log(par(-111));

// return a % 2 === 0