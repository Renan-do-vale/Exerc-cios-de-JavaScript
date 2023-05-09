/*
  Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(n1){
    let aux = n1
    for (let i = n1; i > 1; i--) {
        aux = aux * (i-1)
    }
return aux
}

console.log(fatorial(0))