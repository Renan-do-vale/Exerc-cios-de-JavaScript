/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

JurosSimples = (CapitalInicial, TaxaJuros, TempoAplicado) => {
    console.log(`O valor de R$${CapitalInicial.toFixed(2)} com %${TaxaJuros*100} de juros durante ${TempoAplicado} anos da R$${(CapitalInicial + (CapitalInicial * TaxaJuros * TempoAplicado)).toFixed(2)}`)
}


JurosComposto = (CapitalInicial, TaxaJuros, TempoAplicado) => {
    console.log(`O valor de R$${CapitalInicial.toFixed(2)} com %${TaxaJuros*100} de juros durante ${TempoAplicado} anos da R$${(CapitalInicial * (1 + TaxaJuros) ** TempoAplicado).toFixed(2)}`)
}

JurosSimples(100, 0.1, 2)
JurosComposto(100, 0.1, 2)