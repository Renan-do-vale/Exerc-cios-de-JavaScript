/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calcBasic(n1, operador, n2) {
    switch(operador){
        case '+':
            console.log(`${n1} + ${n2} = ${n1 + n2}`)
            break
        case '-':
            console.log(`${n1} - ${n2} = ${n1 - n2}`)
            break
        case '*':
            console.log(`${n1} x ${n2} = ${n1 * n2}`)
            break
        case '/':
            console.log(`${n1} / ${n2} = ${n1 / n2}`)
            break
        default:
            console.log('Operador invalido')
    }
}

calcBasic(15, '*', 15)
calcBasic(10, '+', 24)
calcBasic(15, '-', 10)
calcBasic(9, '/', 3)
calcBasic(6, 'a', 6)