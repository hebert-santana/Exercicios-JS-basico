// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function divisivel (x, y) {
    if (x % y === 0) {
        return x
    } else {
        for (var i = 0; i <= Math.abs(x*y); i++) {
            if ((x + i) % y === 0 )
            return Number(x+i);
        }
    }
}

console.log(divisivel(1, 23));
console.log(divisivel(23, 23));
console.log(divisivel(7, 3));
console.log(divisivel(-5, 7));

/* while (x % y !== 0) x++;
  return x; */