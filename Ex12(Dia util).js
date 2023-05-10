/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 0 e sábado é o dia 6. Utilize a estrutura Switch. 
*/

let DiaSemana = new Date()
let hoje = DiaSemana.getDay()

function DiaUtil(dia) {
    switch(dia){
        case 0:
            console.log('Sunday is a Weekend')
            break
        case 1:
            console.log('Monday is a Businnes day')
            break
        case 2:
            console.log('Tuesday is a Businnes day')
            break
        case 3:
            console.log('Wednesday is a Business day')
            break
        case 4:
            console.log('Thursday is a Business day')
            break
        case 5:
            console.log('Friday is a Business day')
            break
        case 6:
            console.log('Saturday is a Weekend')
            break
        default:
            console.log('Invalid day')
    }

}

DiaUtil(hoje)