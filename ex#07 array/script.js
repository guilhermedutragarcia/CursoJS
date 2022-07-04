var num = document.getElementById('numero')

function adicionar() {
    if (Number(num.value.length == 0 || Number(num.value) > 100 )){
        window.alert('[ERRO] Verifique o número!')
    } else {
        window.alert('Tudo ok!')
    }

}