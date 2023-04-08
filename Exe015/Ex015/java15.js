function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifiue Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'homem30.jpg')
            }
            else if (idade < 30) {
                // Jovem 
                img.setAttribute('src', 'homem30.jpg')
            }
            else if (idade > 40) {
                // Maduro
                img.setAttribute('src', 'homem60.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulher19.jpg')
            }
            else if (idade < 30) {
                // Jovem 
                img.setAttribute('src', 'mulher30.jpg')
            }
            else if (idade > 40) {
                // Maduro
                img.setAttribute('src', 'mulher60.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}