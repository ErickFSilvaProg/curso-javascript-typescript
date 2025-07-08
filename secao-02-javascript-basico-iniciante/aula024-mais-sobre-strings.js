/**
 * - Strings:
 * 
 * Strings são indexadas. O texto é iterável.
 */

//               01234567
let umaString = 'Um Texto';
let outraString = 'O rato roeu a roupa do rei de roma.'

// 
console.log(umaString);
console.log();

// Retorna caracteres específicos:
console.log('- Retorna caracteres específicos:');
console.log(umaString[1]);
console.log(umaString.charAt(6));
console.log(umaString[8]); // 'undefined' porque não existe.
console.log(umaString[-1]); // 'undefined' porque não existe.
console.log();

// Concatenação:
console.log('- Concatenação:');
console.log(umaString.concat(' em um dia.'));
console.log(umaString + ' em um dia.');
console.log(`${umaString} em um dia.`);
console.log();

// Perquisando por índices:
console.log('- Perquisando por índices:');
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Um', 3)); // '-1' porque não existe após o índice '3'.
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('t', 3)); // Pesquisa de trás para frente.
console.log();

// Expressões regulares em Strings:
console.log('- Expressões regulares em Strings:');
console.log(umaString.match(/[a-z]/g)); // A flag 'g' representa um array.
console.log(umaString.match(/[a-z]/));
console.log();

// Realizando buscas com ou sem expressões regulares:
console.log('- Realizando buscas com ou sem expressões regulares:');
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.search('texto'));
console.log();

// Substituindo caracteres/palavras na Strings:
console.log('- Substituindo caracteres/palavras na Strings:');
console.log(umaString.replace('Um', 'Outro'));
console.log(outraString.replace("rei de roma", 'Rei de Roma')); // Substitui apenas o primeiro 'r'.
console.log(outraString.replace(/r/g, 'R')); // A flag 'g' substitui todos os 'r'.
console.log();

// Retorna o tamanho da String:
console.log('- Retorna o tamanho da String:');
console.log(umaString.length);
console.log(outraString.length);
console.log();

// Fatiamento de String, busca por conteúdo:
console.log('- Fatiamento de String, busca por conteúdo:');
console.log(outraString.slice(2, 6));
console.log(outraString.slice(-3));
console.log(outraString.slice(32));
console.log(outraString.slice(-5 , -1));
console.log();

// Dividindo a String e agrupando em um array:
console.log('- Dividindo a String e formando um array:');
console.log(outraString.split(' '));
console.log(outraString.split('r'));
console.log(outraString.split(' ', 3));
console.log();

// Tornando a String toda maiúscula:
console.log('- Tornar a String toda maiúscula:');
console.log(umaString.toUpperCase());
console.log();

// Tornando a String toda em minúscula:
console.log('- Tornando a String toda em minúscula:');
console.log(umaString.toLowerCase());
console.log();