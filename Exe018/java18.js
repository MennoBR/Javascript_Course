let num =document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
       return true 
    } else {
        return false
    }
}


function adicionar() {
    if(isnumero(num.value) && !inlista(num.value)) {

    } else {
        window.alert("Valor inválido ou já encontrado em lista.")
    }
} 