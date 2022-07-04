function gerar() {
    var num = document.getElementById('numero')
    var res = document.getElementById('seltab')

    if (Number(num.value.length == 0)) {
        window.alert('[ERRO] Insira um número!')
    } else {
        var numero = Number(num.value)
        res.innerHTML =''

        for (i = 1; i <= 10; i++ ){
            var item = document.createElement('option')
            item.text = `${numero} X ${i} = ${numero*i}`
            //item.value = `res${i}`
            res.appendChild(item)
        }
    }
}



