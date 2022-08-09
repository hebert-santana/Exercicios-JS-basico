// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function corrigePalavra (a, b) {
    let palavraA = a.replace('%', '')
    
    let comMaiusculo = palavraA[0].toUpperCase() + palavraA.substring(1);

    function reverteAString (c) {
        let criaArrayComAString = c.split('');
        let reverteArray = criaArrayComAString.reverse();
        let voltaArrayParaString = reverteArray.join("")
        return voltaArrayParaString;
    }
    let palavraB = reverteAString(b);
    let palavraBCorrigida = palavraB.replace('%', '');
    return(comMaiusculo + palavraBCorrigida)
}

console.log(corrigePalavra('java', 'tpi%rcs'));
console.log(corrigePalavra('c%ountry', 'edis'));
console.log(corrigePalavra('down', 'nw%ot'));

/* const func = x => x.replace('%','');
  const first = func(a);
  const second = func(b).split('').reverse().join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second; */