let num = [5, 8, 2, 9, 3]
num.push(6)
console.log(`Os valores do Vetor são: ${num}`)
console.log(`Na posição 2 temos ${num[1]}, com total de ${num.length} slots.`)
console.log(`Os valores do vetor de forma ordenada são: ${num.sort()}.`)

for(let pos=0; pos<num.length;pos++) {
    console.log(num[pos])
}