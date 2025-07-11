/**
 * ECMAScript é uma padronização da linguagem JavaScript criada pela empresa "ECMA Internation".
 * ECMAScript 2015 (ES6)...
 * Não podemos redeclarar variáveis com 'let', apenas com 'var'.
 */

// Variáveis com 'var':
var nome = 'Luiz';
console.log(nome);

var nome = 'Otávio';
console.log(nome);

// Isso criará uma variável global no sistema que poderá afetar outras variáveis do sistema.
// Sempre especifique o 'let' ou o 'const'.
nome = 'Pedro';
console.log(nome);


// Variáveis com 'let':
let usuario = 'Erick';
console.log(usuario)

// Causaria um erro.
// let usuario = 'Pedro'

usuario = 'Lucas'
console.log(usuario)