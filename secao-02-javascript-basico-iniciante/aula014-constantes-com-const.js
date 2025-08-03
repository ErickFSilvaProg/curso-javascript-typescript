/** 
 * Crie constantes com 'const'.
 * Não podemos criar constantes com palavras reservadas.
 * As constantes precisam ter nomes significativos.
 * Não podemos iniciar o nome de constante com um número.
 * As constantes não podem conter espaços ou traços.
 * Criamos constantes no formato camelCase.
 * As constantes são case-sensitive.
 * Não podemos alterar o valor de uma constante.
 * Não podemos declarar uma constante sem inicializa-la:
 * 
 *      const nome;
 *      SyntaxError: Missing initializer in const declaration
*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado += "5";

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log();

console.log(typeof resultado);
console.log(typeof resultadoDuplicado);
console.log(typeof resultadoTriplicado);
console.log();