/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/


function Triangulos (l1, l2, l3) {
    if (l1 == l2 && l2 == l3 && l1 == l3 ) {
        console.log('Triângulo Equilátero')
    } else if (l1 != l2 && l2 != l3 && l1 != l3) {
        console.log('Triângulo Escaleno')
    } else {
        console.log('Triângulo Isósceles:')
    }
}

Triangulos(2, 2, 2)
Triangulos(2, 3, 3)
Triangulos(2, 3, 4)