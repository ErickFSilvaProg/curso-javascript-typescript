/**
 * - Tipos de dados primitivos em javascript:
 * 
 *      String, number, undefined, null, boolean, symbol.
 * 
 */


// - String:
const nome = 'Erick';
const sobrenome = 'Ferreira';
const profissao = 'Programador';

console.log(`${nome} -> ${typeof nome}`);
console.log(`${sobrenome} -> ${typeof sobrenome}`);
console.log(`${profissao} -> ${typeof profissao}`);
console.log();


// - Number:
let idade = 39;
let salario = 6545.34;

console.log(`${idade} -> ${typeof idade}`);
console.log(`${salario} -> ${typeof salario}`);
console.log();


// - Undefined: Não aponta para local algum na memória.
// Utilizada para declarar uma variável sem atribuir valor.
let nomeSupervisor; // Deixar o seu uso para a linguagem.

console.log(`${nomeSupervisor} -> ${typeof nomeSupervisor}`);
console.log();


// - Null: Não aponta para local algum na memória.
// Utilizada para anular intencionalmente uma variável.
let horasExtras = null;

console.log(`${horasExtras} -> ${typeof horasExtras}`);
console.log();


// - Boolean:
let cadastroAtivo = true;
let deficiente = false;

console.log(`${cadastroAtivo} -> ${typeof cadastroAtivo}`);
console.log(`${deficiente} -> ${typeof cadastroAtivo}`);
console.log();


// - Passagem de valor com dados primitivos: Os valores são copiados e não referenciados.
let a = 2;
let b = a;

console.log(`a = ${a} | b = ${b}`);

a = 3;
console.log(`a = ${a} | b = ${b}`);
console.log();