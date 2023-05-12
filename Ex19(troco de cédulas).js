/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function SacarDinheiro (dinheiro) {
    nota100 = 0
    nota50 = 0
    nota10 = 0
    nota5 = 0
    nota1 = 0
    while(dinheiro > 0) {
        if (dinheiro >= 100) {
            dinheiro -= 100
            nota100++
        }else if (dinheiro >= 50) {
            dinheiro -= 50
            nota50++
        }else if (dinheiro >= 10) {
            dinheiro -=10
            nota10++
        }else if (dinheiro >= 5) {
            dinheiro -=5
            nota5++
        }else {
            dinheiro -=1
            nota1++
        }
    }
    nota100 > 0 ? console.log(`${nota100} notas de R$100,00`): ''
    nota50 > 0 && console.log(`${nota50} notas de R$50,00`)
    nota10 > 0 && console.log(`${nota10} notas de R$10,00`)
    nota5 > 0 && console.log(`${nota5} notas de R$5,00`)
    nota1 > 0 && console.log(`${nota1} notas de R$1,00`) 

}

SacarDinheiro(153)