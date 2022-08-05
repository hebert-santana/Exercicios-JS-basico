function alteraArray (a) {
    if (a.length > 3) {
        a.splice(0, 3)
        return a
    } else {
        return [];
    }
}

console.log(alteraArray([1, 2, 3, 4, 5]));
console.log(alteraArray([5, 4, 3, 2, 1, 0]));
console.log(alteraArray([10, 20, 30]));
console.log(alteraArray([99, 100]));