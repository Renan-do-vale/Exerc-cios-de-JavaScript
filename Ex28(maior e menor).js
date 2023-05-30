/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function MaioreMenor(vetor) {
    let MaiorValor = Math.max(...vetor)
    let MenorValor = Math.min(...vetor)
    console.log(`O maior valor é ${MaiorValor} e o menor valor é ${MenorValor}`)
}

let inteiros = [10, 5 ,7 ,4 ,44 ,12 ,66 ,7]

MaioreMenor(inteiros)