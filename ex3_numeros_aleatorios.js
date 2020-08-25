// Deve gerar dois números aleatórios entre 1 e 100. Em seguida, some estes 
// números e devolva uma string com o resultado no formato: 
// "a soma de [número aleatório] e [número aleatório] é XXX". 

function numeroAleatorio(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    let numero1 = Math.floor(Math.random() * (max - min)) + min;
    let numero2 = Math.floor(Math.random() * (max - min)) + min;
    
    let resultado = numero1 + numero2
    return `A soma de ${numero1} e ${numero2} é ${resultado}`
    
  }

  console.log(numeroAleatorio(1, 100))

