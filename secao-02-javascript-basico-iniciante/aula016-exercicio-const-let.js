/**
 * Tamplate string: `Conteúdo aqui...`
 */

const nome = "Erick";
const sobrenome = "Ferreira da Silva";
const idade = 39;
const peso = 82;
const alturaEmM = 1.75;
let anoAtual = new Date().getFullYear();
let anoNascimento;
let imc;

anoNascimento = anoAtual - idade;
imc = peso / (alturaEmM *alturaEmM);

console.log(
    `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg. Tem ${alturaEmM}m de altura e seu IMC é de ${imc.toFixed(2)}.`
);

console.log(
    `${nome} nasceu em ${anoNascimento}.\n`
)