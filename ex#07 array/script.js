var num = document.getElementById('numero')
var lista = document.getElementById('cxnum')
var res = document.getElementById('res')
var valores = []

function Numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}
function nalista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}

function adicionar() {
    if(Numero(num.value) && !nalista(num.value, valores)){
        window.alert('tudo ok')
       
    } else{
         window.alert('[ERRO] Verifique o número!')
    }
}