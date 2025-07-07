// Tipos de dados primitivos:

// String:
const nome = 'Erick';
const sobrenome = "Ferreira";
let profissao = `Programador`;

// Number:
let idade = 38;
let salario = 6856.45;

// Underfined: Não aponda para local algum na memória.
// Utilizada para declarar uma variável sem atibuir valor a mesma.
let descricaoPessoa;

// Nulo: Não aponda para local algum na memória.
// Utilizada para anular intencionalmente uma variável.
let descricaoCarreira = null;

// Boolean:
let ativoEmpresa = true;
let deficiente = false;


// Verificando os tipos:
console.log(`${nome}: ${typeof nome}`)
console.log(`${sobrenome}: ${typeof sobrenome}`)
console.log(`${profissao}: ${typeof profissao}`)
console.log(`${idade}: ${typeof idade}`)
console.log(`${salario}: ${typeof salario}`)
console.log(`${descricaoPessoa}: ${typeof descricaoCarreira}`)
console.log(`${descricaoCarreira}: ${typeof descricaoCarreira}`)
console.log(`${ativoEmpresa}: ${typeof ativoEmpresa}`)
console.log(`${deficiente}: ${typeof deficiente}`)
