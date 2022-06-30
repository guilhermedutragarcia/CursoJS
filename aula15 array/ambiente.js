let num = [3, 1, 6, 4, 8, 7]
num.sort()
num.push(9)
console.log(num)
console.log(`Meu vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
for(var pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}