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
let num1 = 1; // Number.
let num2 = 2.5; // Number.

console.log(num1 + num2, "\n");

// Converte number em string:
console.log("- Converte number em string:");
console.log(num1.toString() + num2);
console.log();
console.log();