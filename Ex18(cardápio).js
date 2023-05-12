/*
O cardápio de uma lanchonete é o seguinte:
Código     Produto                   Preço
100      Cachorro Quente             R$ 3,00
200      Hambúrguer                  R$ 4,00
300      Cheeseburguer               R$ 5,50
400      Bauru                       R$ 7,50
500      Refrigerante                R$ 3,50
600      Suco                        R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function cardapio(cod, quantidade=1) {
    switch(cod) {
        case 100:
            precoProduto = 3
            totpreço = quantidade * precoProduto
            totpreço = totpreço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            console.log(`Na compra de ${quantidade} Cachorro quente fica ${totpreço}`)
            break
        case 200:
            precoProduto = 4
            totpreço = quantidade * precoProduto
            totpreço = totpreço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            console.log(`Na compra de ${quantidade} Hambúrguer fica ${totpreço}`)
            break
        case 300:
            precoProduto = 5.50
            totpreço = quantidade * precoProduto
            totpreço = totpreço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            console.log(`Na compra de ${quantidade} Cheeseburguer  fica ${totpreço}`)
            break
        case 400:
            precoProduto = 7.50
            totpreço = quantidade * precoProduto
            totpreço = totpreço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            console.log(`Na compra de ${quantidade} Bauru  fica ${totpreço}`)
            break
        case 500:
            precoProduto = 3.50
            totpreço = quantidade * precoProduto
            totpreço = totpreço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            console.log(`Na compra de ${quantidade} Refrigerante  fica ${totpreço}`)
            break
        case 600:
            precoProduto = 2.80
            totpreço = quantidade * precoProduto
            totpreço = totpreço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            console.log(`Na compra de ${quantidade} Suco  fica ${totpreço}`)
            break
        default:
            console.log('Produto não existe!')
            
    }
}

cardapio(100, 5)
cardapio(200, 3)
cardapio(300, 1)
cardapio(400, 7)
cardapio(500, 4)
cardapio(600, 8)
cardapio(700, 1)



