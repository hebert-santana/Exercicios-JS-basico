function retornaTipo (a) {
    return typeof a
}

console.log(retornaTipo(1));
console.log(retornaTipo(false));
console.log(retornaTipo({}));
console.log(retornaTipo("Galo doido!"));
console.log(retornaTipo(["o galo é doido!"]));