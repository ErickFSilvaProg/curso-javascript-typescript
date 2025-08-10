/**
 * - Objeto Math.
 */

let num1 = 9.54578;
let num2 = 2;
let num_aleatorio = Math.random() * (10 - 1) + 1;
let array1 = [1,2,3,4,5,-10,-50,1500,9,8,7,6];

// Arredondando para baixo:
console.log("- Arredondando para baixo:");
console.log(num1);
console.log(Math.floor(num1));
console.log();

// Arredondando para cima:
console.log("- Arredondando para cima:");
console.log(num1);
console.log(Math.ceil(num1));
console.log();

// Arredondando para o mais próximo:
console.log("- Arredondando para o mais próximo:");
console.log(num1);
console.log(Math.round(num1));
console.log();

// Encontrar o maior valor:
console.log("- Encontrando o maior valor:");
console.log(array1);
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log();

// Encontrar o menor número:
console.log("- Encontrar o menor número:");
console.log(array1);
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log();

// Gerar números aleatórios:
console.log("- Gerar números aleatórios:");
console.log(Math.random()); // Número aleatório entre 0 e 1. O 1 não é incluído.
console.log(num_aleatorio);
console.log(Math.round(num_aleatorio)); // Número aleatório entre 1 e 10.
console.log(Number(num_aleatorio.toFixed())); // Número aleatório entre 1 e 10.
console.log();

// Valor de PI:
console.log("- Valor de PI:");
console.log(Math.PI);
console.log();

// Potenciação:
console.log("- Potenciação:");
console.log(Math.pow(2, 10));
console.log(2 ** 10);
console.log();

// Raiz quadrada::
console.log("- Raiz quadrada:");
console.log(Math.sqrt(81));
console.log(81 ** 0.5);
console.log();
