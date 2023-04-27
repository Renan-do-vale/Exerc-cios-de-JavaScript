/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/

let PontosPartida = [30, 40, 20, 4, 51, 25, 42, 38, 56, 0]

function AvaliarPontuacao(pontos) {
let aux = pontos[0]
let recordPartida = 0
let piorPartida = pontos[0]
for (let i in pontos) {
    if (pontos[i] > aux) {
        recordPartida++
    }
    if (pontos[i] < aux) {
        if (pontos[i] > piorPartida){
            continue
        }else {
        piorPartida = pontos[i]
        }
    }
    aux = PontosPartida[i]
}
let posicaoPiorPartida = pontos.indexOf(piorPartida)
console.log(`Ao todo foram ${recordPartida} três partidas que ele obteve recorde de pontos.`)
console.log(`A sua pior partida foi a partida de numero ${posicaoPiorPartida+1}`)
}

AvaliarPontuacao(PontosPartida)


