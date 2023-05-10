/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.

*/

function BancaDeFrutas(nomeFruta) {
    let nomeFrutaUp = nomeFruta.toUpperCase()
    switch(nomeFrutaUp) {
        case 'MAÇÃ':
            console.log('Não vendemos está fruta aqui')
            break
        case 'KIWI':
            console.log('Estamos com escassez de kiwis')
            break
        case 'MELANCIA':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Erro, digite uma fruta válida')

    }
}

BancaDeFrutas('Maçã')
BancaDeFrutas('Kiwi')
BancaDeFrutas('Melancia')
BancaDeFrutas('Pera')