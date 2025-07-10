/** 
 * - Array - Básico:
 * 
 * Array é uma lista, uma coleção que armazena dados.
 * Podemos armazenas qualquer tipo de dado no array.
 * É uma boa prática manter um array com o mesmo tipo de dado.
 * O arrays também são indexados como os strings. Mas são indexados pelos elementos.
 * Se o índice do array não existir, ele será criado automaticamente em sua declaração. Se existir o valor será substituído.
 * Na remoção ou na adicão iniial os índices são alterados.
 * Array em JavaScript são objetos.
 * Sempre opite por adicionar ou remover elementos no final do array.
 */

// Criando um array:
// Posições:       0       1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log();

// Acessando elementos do array por índice:
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

// Adicionar elementos no final do array:
alunos.push('Luiza');
console.log(alunos);
console.log();

// Remover elementos no final do array:
// O item removido pode ser armazenado em uma variável.
alunos.pop();
console.log(alunos);
console.log();

// Adicionar elementos no início do array:
alunos.unshift('Erick');
console.log(alunos);
console.log();

// Remover elementos no início do array:
// O item removido pode ser armazenado em uma variável.
alunos.shift()
console.log(alunos);
console.log();

// Deletar um elemento sem apagar o índice:
delete alunos[1];
console.log(alunos);
console.log();

// Listando elementos do array por quantidade (fatiamento):
console.log(alunos.slice(0, 2)); // A última posição não será exibida.
console.log();

// Verificando que tipo o array é:
console.log(typeof alunos);
console.log(alunos instanceof Array);
console.log();
