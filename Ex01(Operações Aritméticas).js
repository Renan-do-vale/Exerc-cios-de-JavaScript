/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function CalcularOperacoes (n1, n2) {
    console.log(`${n1} + ${n2} = ${n1 + n2} `)
    console.log(`${n1} - ${n2} = ${n1 - n2} `)
    console.log(`${n1} x ${n2} = ${n1 * n2} `)
    console.log(`${n1} / ${n2} = ${n1 / n2} `)
}


CalcularOperacoes(10, 5)