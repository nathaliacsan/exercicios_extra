// Faça um Programa que leia três números e mostre o maior deles.

const read = require("readline-sync")

const numero1 = parseInt(read.question("Digite o primeiro número: "))
const numero2 = parseInt(read.question("Digite o segundo número: "))
const numero3 = parseInt(read.question("Digite o terceiro número: "))

function numeroMaior(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log(numeroMaior(numero1, numero2, numero3))