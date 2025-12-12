/**
 * ECMAScript é uma padronização da linguagem JavaScript criada pela empresa "ECMA Internation".
 * ECMAScript 2015 (ES6)...
 * Não podemos redeclarar variáveis com 'let', apenas com 'var'.
 */


// Variáveis com 'var':
var nome = 'Otávio';
console.log(nome);

var nome = 'Erick';
console.log(nome);


// Declarar variáveis sem 'let' ou 'const' criará uma variável global no sistema que poderá afetar outras variáveis do sistema.
// Sempre especifique o 'let' ou o 'const' na criação de variáveis ou constantes.
sobrenome = 'Ferreira';
console.log(sobrenome);


// Variáveis com 'let':
let usuario = 'Erick';
console.log(usuario);


try {
    // Redeclarar uma variável com 'let' causaria um erro.
    let usuario = 'Fulano';
}
catch {
    // Não podemos redeclarar variáveis com 'let', apenas com 'var'.
}
finally {
    usuario = 'Lucas';
}

console.log(usuario);