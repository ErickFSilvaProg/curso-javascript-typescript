// Exercício - IMC

const nome = 'Erick';
const sobrenome = 'Ferreira';
const idade = 38;
const peso = 82;
const alturaEmM = 1.75;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmM}m de altura e seu IMC é ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);