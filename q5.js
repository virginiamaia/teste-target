//Questão 5: Inversão de String

function inverteString(str) {
  let invertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

// Entrada
const input = "Teste";
console.log("String invertida:", inverteString(input));
