/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function contNegativo(vetor) {
    let negativos = 0
    for(let numeros in vetor) {
        if(vetor[numeros] < 0) {
            negativos++
        }
    }
    console.log(`nesse vetor tem ${negativos} números negativos`)
}

let Numeros =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

contNegativo(Numeros)