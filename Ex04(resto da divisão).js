/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

RestoDivisao = (a, b) => {
    console.log(`${a} / ${b} = ${Math.floor(a / b)} e o resto da divisão é ${a % b}`)
}


RestoDivisao(7, 2)