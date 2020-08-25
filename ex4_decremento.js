// Faça um algoritmo que imprima números inteiros de n a 1 
// (Ex.: O usuário digita o número 10. Você deve lista 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);

const read = require("readline-sync")

const numero = parseInt(read.question("Digite um número: "))

for (let i = numero; i > 0; i--) {
    console.log(i)
}