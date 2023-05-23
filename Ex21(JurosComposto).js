/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function jurosComposto (mes, valorAnuidade) {
    if(mes > 0 && mes < 13) {
        var atraso = mes - 1
        return (valorAnuidade * ((1 + 0.05)**atraso)).toFixed(2)
    } else {
        return 'Mês Inválido.'
    }
}


console.log(jurosComposto(5,1000))