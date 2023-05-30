/*
 Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

const Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
function ParImpar(vetor) {
    let contPar = 0
    let contImpar = 0
    for(let i in vetor) {
        if(vetor[i] % 2 == 0) {
            contPar++
        }else{
            contImpar++
        }
    }
    console.log(`O total de números pares é ${contPar}.`)
    console.log(`O total de números impares é ${contImpar}.`)
}

ParImpar(Numeros)