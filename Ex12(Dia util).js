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
            break
        case 1:
            console.log('Monday')
            break
        case 2:
            console.log('Tuesday')
            break
        case 3:
            console.log('Wednesday')
            break
        case 4:
            console.log('Thursday')
            break
        case 5:
            console.log('Friday')
            break
        case 6:
            console.log('Saturday')
            break
        default:
            console.log('Erro')
    }

}

DiaUtil(hoje)