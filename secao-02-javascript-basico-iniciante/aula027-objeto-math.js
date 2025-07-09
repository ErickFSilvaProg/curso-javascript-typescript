/**
 * - Objeto Math():
*/

// Variáveis:
let num1 = 9.54578;
let num2 = 2;
let num_aleatorio = Math.random() * 10;
let array1 = [1,2,3,4,5,-10,-50,1500,9,8,7,6];

// Arredondando para baixo:
console.log('- Arredondando para baixo:')
console.log(Math.floor(num1));
console.log();

console.log('- Arredonda para cima:');
console.log(Math.ceil(num1));
console.log();

console.log('- Arredonda para o mais próximo:');
console.log(Math.round(num1));
console.log();

console.log('- Encontrar o maior valor:');
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log();

console.log('- Encontrar o menor número:');
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log();

console.log('- Gerar números aleatórios:');
console.log(Math.random()); // Número aleatórios entre 0 e 1, Sendo que o 1 não é incluído.
console.log(Math.random().toFixed(1)); // Número aleatório com uma casa decimal.
console.log(num_aleatorio.toFixed()); // Número aleatório sem casa decimal entre 1 e 10.
console.log();

console.log('- Valor de PI:');
console.log(Math.PI);
console.log();

console.log('- Potenciação:');
console.log(Math.pow(2, 10)); // Potenciação utilizando o método pow().
console.log(2 ** 10); // Potenciação utilizando o operador.
console.log();

console.log('- Raiz quadrada:');
console.log(Math.sqrt(81));
console.log();