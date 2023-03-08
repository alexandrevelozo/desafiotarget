// 2)
// Solicita que o usuário informe um número
let num = 21;

// Variáveis para armazenar a sequência de Fibonacci
let a = 0;
let b = 1;
let c = 0;

// Variável para verificar se o número informado pertence à sequência
let pertence = false;

// Loop para calcular a sequência de Fibonacci
while (c < num) {
  c = a + b;
  a = b;
  b = c;
  if (c === num) {
    pertence = true;
  }
}

// Verifica se o número informado pertence à sequência e exibe uma mensagem
if (pertence) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}
