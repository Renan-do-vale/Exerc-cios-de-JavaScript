// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

let numeros = [1, 2, 3, 4, 5]

function multiplicarNumero(vetor, multiplicador) {
    let vetorx = vetor.map( e => e * multiplicador)
    return vetorx
}


function multiplicarNumeroMaior5(vetor, multiplicador) {
if(multiplicador > 5) {
    let vetorx = vetor.map(e => e * multiplicador)
    return vetorx
}else{
    console.log('somente valores maiores que 5')
}
}
console.log(multiplicarNumero(numeros, 3))
console.log(multiplicarNumeroMaior5(numeros, 11))