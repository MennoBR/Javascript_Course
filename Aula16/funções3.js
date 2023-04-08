//Recursividade = Chamar uma função dentro dela mesma.
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c++) {
        fat *= c
    }
    return fat * fatorial
}

console.log(fatorial(2))