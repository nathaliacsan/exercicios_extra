// Faça um Programa que leia três números e mostre o maior e o menor deles.

const read = require("readline-sync")

const numero1 = parseInt(read.question("Digite o primeiro número: "))
const numero2 = parseInt(read.question("Digite o segundo número: "))
const numero3 = parseInt(read.question("Digite o terceiro número: "))

function maiorMenor (num1, num2, num3) {
    let maior = Math.max(num1, num2, num3)
    let menor = Math.min(num1, num2, num3)
    console.log(maior, menor)
}

console.log(maiorMenor(numero1, numero2, numero3))

