// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

function removeDaStr (a) {

    let retiraTres = Number(a.length) - 3;
    console.log(retiraTres)
    let strRetorna = a.substr(0, retiraTres)
    return strRetorna;
}

console.log(removeDaStr('abcdefg'));

// return a.slice(0, -3);