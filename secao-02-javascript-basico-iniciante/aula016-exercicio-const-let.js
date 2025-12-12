/**
 * - Tamplate string: 
 * 
 *      O template string é uma maneira mais otimizada de concatenar ou unir dados para formar uma expressão, com ele é possível misturar diferentes tipos (variáveis, textos, operadores etc) de forma mais eficiente e no final irá converter a expressão em uma string única.
 *      
 *      Exemplo: `Conteúdo aqui dentro!`
 */


// - Variáveis:
const nome = 'Erick';
const sobrenome = 'Ferreira';
const alturaEmM = 1.75;
const anoNascimento = 1986;
let peso = 81;
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;
let imc = peso / (alturaEmM * alturaEmM);


// - Programa:
console.log(
    `Erick Ferreira tem ${idade} anos, pesa ${peso} kg, sua altura é ${alturaEmM} metros e seu IMC é de ${imc.toFixed(2)}.`
);
console.log(
    `\n${nome} ${sobrenome} nasceu em ${anoNascimento}.\n`
);