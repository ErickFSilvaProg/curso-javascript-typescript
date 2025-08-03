// Tipos de dados primitivos: String, number, undefined, null, boolean, symbol.

// String:
const nome = 'Erick';
const sobrenome = "Ferreira";
const profissao = `Programador`;
console.log(`${nome}: ${typeof nome}`)
console.log(`${sobrenome}: ${typeof sobrenome}`)
console.log(`${profissao}: ${typeof profissao}`)

// Number:
let idade = 38;
let salario = 5645.34
console.log(`${idade}: ${typeof idade}`)
console.log(`${salario}: ${typeof salario}`)

// Underfined: Não aponta para local algum na memória.
// Utilizada para declarar uma variável sem atibuir valor a mesma.
// let descricaoPessoa; (undefined)

// Null: Não aponta para local algum na memória.
// Utilizada para anular intencionalmente uma variável.
let descricaoCarreira = null;
console.log(`${descricaoCarreira}: ${typeof descricaoCarreira}`)

// Boolean:
let ativoEmpresa = true;
let deficiente = false;
console.log(`${ativoEmpresa}: ${typeof ativoEmpresa}`)
console.log(`${deficiente}: ${typeof deficiente}`)

// Passagem de valor com dados primitivos: os valores são copiados e não referenciados.
let a = 2;
let b = a;
console.log(a, b);

a = 3;
console.log(a, b);