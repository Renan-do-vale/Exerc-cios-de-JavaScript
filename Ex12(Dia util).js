/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 0 e sábado é o dia 6. Utilize a estrutura Switch. 
*/

let DiaSemana = new Date()
let hoje = DiaSemana.getDay()

function DiaUtil(dia) {
    switch(dia){
        case 0:
            console.log('Sunday')
            console.log('Weekend')
            break
        case 1:
            console.log('Monday')
            console.log('Business day')
            break
        case 2:
            console.log('Tuesday')
            console.log('Business day')
            break
        case 3:
            console.log('Wednesday')
            console.log('Business day')
            break
        case 4:
            console.log('Thursday')
            console.log('Business day')
            break
        case 5:
            console.log('Friday')
            console.log('Business day')
            break
        case 6:
            console.log('Saturday')
            console.log('Weekend')
            break
        default:
            console.log('Invalid day')
    }

}

DiaUtil(hoje)