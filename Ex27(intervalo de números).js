/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

const Numeros = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

function IntervaloDeNumeros(vetor) {
    let entre10e20 = 0
    let fora10e20 = 0
    for(let i in vetor) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            entre10e20++
        }else {
            fora10e20++
        }
    }
    console.log(`Existe ${entre10e20} numeros entre 10 e 20 e ${fora10e20} fora do intervalo.`)
}

IntervaloDeNumeros(Numeros)