/*
  Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(n1){
    if (n1 == 0) {
        return 1
    } else {
        for (let i = n1; i > 1; i--) {
            n1 = n1 * (i-1)
    }}
    return n1
}

console.log(fatorial(0))