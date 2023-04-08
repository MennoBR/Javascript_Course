let valores = [8, 1, 7, 4, 2, 9]
//for(let pos=0; pos < valores.length; pos++){
//    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
//}

//Outro jeito de se fazer:
//for(let pos in valores) {
//   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
//}

// Buscando valores no vetor:
let pos = valores.indexOf(4)
if (pos == -1) {
    console.log('O Valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${pos}.`)
}
