function gerar() {
    var num = document.getElementById('numero')
    var res = document.getElementById('seltab')

    if (Number(num.value.length == 0)) {
        window.alert('[ERRO] Insira um número!')
    } else {
        var numero = Number(num.value)
        var i = 1
        res.innerHTML =''

        while (i <= 10) {
            var item = document.createElement('option')
            item.text = `${numero} X ${i} = ${numero*i}`
            item.value = `tab${i}`
            res.appendChild(item)
            i++
        
        }
    }
}



