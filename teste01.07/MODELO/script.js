function contar() {
    var inicio = document.getElementById('inicio')    
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Verifique os números e insira novamente!')
    }else {
        res.innerHTML= "Contando: "
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number (passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p)
            res.innerHTML += `${c} `
        } else {
            for (let c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} `
        }
    res.innerHTML += "Parabéns!"  
    } 
}