/*
elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

const AnoBisexto = Ano => {
    if (Ano <= 0) {
        return false
    } else if (Ano % 400 == 0) {
        return true
    } else if (Ano % 100 == 0) {
        return false
    } else if (Ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(AnoBisexto(0))
console.log(AnoBisexto(4))
console.log(AnoBisexto(100))
console.log(AnoBisexto(2023))
console.log(AnoBisexto(1997))
console.log(AnoBisexto(2024))