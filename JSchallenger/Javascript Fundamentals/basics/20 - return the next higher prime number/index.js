function retornaPrimo(a) {
    let num = a;
    if (num === 2) {
        return num;
    } else if (num > 2) {
        for (var x = 2; x < num; x++) {
            if (num % x === 0) {
                console.log(`${num} é divisível por ${x}`)
                num++;
                x = 2;
            }
        }
        return num;
    }
    return num;
}

console.log(retornaPrimo(38));
console.log(retornaPrimo(7));
console.log(retornaPrimo(115));
console.log(retornaPrimo(2000));


/* function myFunction( a ) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
 let n = a;
 while (!isPrime(n)) n++;
return n
} */