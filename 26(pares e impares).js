/*
 Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

const Numeros = [10, 9, 5 , 2, 3, 5, 11, 12, 13]
function ParImpar(vetor) {
    let contPar = 0
    let contImpar = 0
    for(let i in vetor) {
        if(i % 2 == 0) {
            contPar++
        }else{
            contImpar++
        }
    }
    console.log(`O total de números pares é ${contPar}.`)
    console.log(`O total de números impares é ${contImpar}.`)
}

ParImpar(Numeros)