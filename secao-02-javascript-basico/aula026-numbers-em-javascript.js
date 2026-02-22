/**
 * toString() - Converte o tipo da variável em String.
 * toString(2) - Versão binária do 'toString()'.
 * typeof() - Retorna o tipo da variável.
 * parseInt() - Converte o tipo 'String' em 'Inteiro'.
 * parseFloat() - Converte o tipo 'String' em 'Float'.
 * 
 * Obs.: 
 *      Em cálculos entre numéricos e strings sempre será realizada uma concatenação.
 *      O JS segue o padrão IEEE 754-2008 para os cálculos com números.
 */

// Variáveis:
let num1 = 1; // Number (inteiro).
let num2 = 2.5; // Number (float).
let num3 = 10;
let num4 = 10.4789551255547
let num5 = num3 * 'Ola'; // Retorna um 'NaN'.
let num6 = num3 + '2'; // Retorna um string.
let num7 = 0.1 + 0.7;

console.log(num1 + num2);
console.log();

// Converter numéricos (inteiro ou float) em string:
console.log("- Converte number em string:");
console.log(num1.toString() + num2);
console.log(num3.toString(2)); // Representação binária do 'toString()'.
console.log();

// Arredondando as casas decimais:
console.log("- Arredondando as casas decimais:");
console.log(num4.toFixed());
console.log(num4.toFixed(2)); // Arredonda em duas casas decimais.
console.log();

// Verifica se o número é inteiro:
console.log("- Verifica se o número é inteiro:");
console.log(Number.isInteger(num6));
console.log();

// Verifica se o número é NaN:
console.log("- Verifica se o número é NaN:");
console.log(Number.isNaN(num5));
console.log(Number.isNaN(num6));
console.log();

// Padrão IEEE 754-2008:
console.log("- Padrão IEEE 754-2008:");
console.log(num7);
console.log(Number(num7.toFixed(1))); // Corrigindo a imprecisão do padrão: IEEE 754-2008
console.log();