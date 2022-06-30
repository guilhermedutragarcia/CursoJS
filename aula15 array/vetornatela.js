var valores = [8, 1, 4, 2, 9, 0, 3, 4, 6, 3, 5]
valores.sort()      //.sort() ordena em ordem crescente. o momento que ele é escrito influencia no resultado das  demais linhas.
valores.indexOf(5)
//for(var pos = 0 ; pos < valores.length ; pos++){
//    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
//}
for(var pos in valores) {       //lê-se "para cada POSição na variavel composta(valores)"
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`Aqui está ${valores.indexOf(3)}`)           //.indexOf(numero) procura dentro da array a posição do numero, no caso o 3