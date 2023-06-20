// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function compararString(string1, string2) {
    let arraystring1 = string1.toUpperCase().split('')
    let arraystring2 = string2.toUpperCase().split('')

    let novoArray1 = arraystring1.map(elemento => {
        if(!arraystring2.includes(elemento)) {
            return elemento
        }
    }).filter(elemento => {
        return elemento !== undefined;
    })

    let novoArray2 = arraystring2.map(elemento => {
        if(!arraystring1.includes(elemento)) {
            return elemento
        }
    }).filter(elemento => {
        return elemento !== undefined;
    })

    if (novoArray1.length === 0 && novoArray2.length === 0) {
        return true
    } else {
        return false
    }
}


console.log(compararString('abcdfgvj', 'dcbafjvg'))