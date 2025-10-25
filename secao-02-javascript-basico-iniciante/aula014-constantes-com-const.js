/** 
 * Crie constantes com 'const'.
 * Não podemos criar constantes com palavras reservadas.
 * As constantes precisam ter nomes significativos.
 * Não podemos iniciar o nome de constante com um número.
 * As constantes não podem conter espaços ou traços.
 * Criamos constantes no formato camelCase.
 * As constantes são case-sensitive.
 * Não podemos modificar o valor de uma constante:
 * 
 *      TypeError: Assignment to constant variable.
 * 
 * Não podemos declarar uma constante sem inicializa-la:
 * 
 *      const nome;
 *      SyntaxError: Missing initializer in const declaration
 * 
 * String = texto
 * Number = número
 * 
 * A soma entre um number e um string resulta em uma concatenação entre ambos.
*/


const nome = "Erick Ferreira";
console.log(nome);
console.log();

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = "3";

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + primeiroNumero;
console.log(resultadoTriplicado);
console.log();


console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);
console.log(typeof terceiroNumero);
console.log();

console.log(typeof (primeiroNumero + segundoNumero));
console.log(typeof (primeiroNumero + terceiroNumero));
console.log();