/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function PlanoSalario(salario, plano) {
    switch(plano) {
        case 'A':
            return salario + (salario * 0.10)
        case 'B':
            return salario + (salario * 0.15)
        case 'C':
            return salario + (salario * 0.20)
        default:
            return 'Plano Inválido'
    }
}

console.log(PlanoSalario(1200, 'A'))
console.log(PlanoSalario(2000, 'B'))
console.log(PlanoSalario(3000, 'C'))
console.log(PlanoSalario(1200, 'v'))