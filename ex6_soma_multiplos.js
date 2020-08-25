// Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.

let numeros = 0
for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 ===0) {
        numeros += i
    }
}

console.log(numeros)