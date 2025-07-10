/** 
 * - Array - Básico:
 * 
 * Array é uma lista, uma coleção que armazena dados.
 * Podemos armazenas qualquer tipo de dado no array.
 * É uma boa prática manter um array com o mesmo tipo de dado.
 * O arrays também são indexados como os strings. Mas são indexados pelos elementos.
 * Se o índice do array não existir, ele será criado automaticamente em sua declaração. Se existir o valor será substituído.
 */

// Criando um array:
// Posições:       0       1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log();

alunos[0] = 'Eduardo';
console.log(alunos);
console.log();

alunos[3] = 'Fulano'; // Índice não existe, mas será criado automaticamente.
console.log(alunos);
console.log();

// Adiciona um elemento sempre ao final do array:
alunos.push('Luiza');
alunos.push('Fábio');
console.log(alunos);
console.log();

console.log();