/*
 Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function numeroExtenso(numero) {
    switch(numero) {
        case 0:
            return 'Zero'
        case 1:
            return 'One'
        case 2:
            return 'Two'
        case 3:
            return 'Three'
        case 4:
            return 'Four'
        case 5:
            return 'Five'
        case 6:
            return 'Six'
        case 7:
            return 'Seven'
        case 8:
            return 'Eight'
        case 9:
            return 'Nine'
        case 10:
            return 'Ten'
        default:
            return 'Número fora do intervalo.'

    }
}

console.log(numeroExtenso(8))
console.log(numeroExtenso(5))
console.log(numeroExtenso(0))
console.log(numeroExtenso(11))