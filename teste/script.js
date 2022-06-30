function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano = document.getElementById('anonasc')
    var res = document.getElementById('res')
    
    if (ano.value.length == 0 || Number(ano.value) > anoatual) {
        window.alert('ERRO arruma essa porra ai')
    } else {
        var idade = anoatual - Number(ano.value)
        var genero = ''
        var fsex = document.getElementsByName('radsex')

        if (fsex[0].checked) {
            var genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            } 
        } else if (fsex[1].checked) { 
            var genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificado ${genero} com ${idade} anos asasfadftufutrasiuy87tt76ru6r6ruas`


        

        //window.alert('ok')
        /*var fsex = document.getElementsByName('radsex')*/
    }

}