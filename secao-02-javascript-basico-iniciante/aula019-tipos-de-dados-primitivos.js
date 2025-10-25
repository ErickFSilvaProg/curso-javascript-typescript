/**
 * - Tipos de dados primitivos: 
 *      
 *      String, number, undefined, null, boolean, symbol.
 */

// String:
const nome = 'Erick';
const sobrenome = "Ferreira";
const profissao = `Programador`;
console.log(`${nome}: ${typeof nome}`);
console.log(`${sobrenome}: ${typeof sobrenome}`);
console.log(`${profissao}: ${typeof profissao}`);
console.log();

// Number:
let idade = 38;
let salario = 5645.34;
console.log(`${idade}: ${typeof idade}`);
console.log(`${salario}: ${typeof salario}`);
console.log();

// Underfined: Não aponta para local algum na memória.
// Utilizada para declarar uma variável sem atibuir valor a mesma.
let descricaoPessoa; // undefined
console.log(descricaoPessoa, typeof descricaoPessoa);
console.log();

// Null: Não aponta para local algum na memória.
// Utilizada para anular intencionalmente uma variável.
let descricaoCarreira = null;
console.log(`${descricaoCarreira}: ${typeof descricaoCarreira}`);
console.log();

// Boolean:
let ativoEmpresa = true;
let deficiente = false;
console.log(`${ativoEmpresa}: ${typeof ativoEmpresa}`);
console.log(`${deficiente}: ${typeof deficiente}`);
console.log();

// Passagem de valor com dados primitivos: os valores são copiados e não referenciados.
let a = 2;
let b = a;
console.log(a, b);

a = 3;
console.log(a, b);
console.log();