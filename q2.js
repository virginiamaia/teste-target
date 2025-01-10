//Questão 2: Sequência de Fibonacci

// Importa o módulo readline
const readline = require('readline');

// Cria a interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para verificar se o número pertence à sequência de Fibonacci
function isFibonacci(num) {
  let a = 0, b = 1;
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return num === b || num === 0;
}

// Solicita o número ao usuário
rl.question("Digite um número: ", (input) => {
  const numero = parseInt(input, 10);
  if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
  rl.close();
});

  