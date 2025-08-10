/** 
 * - Array - Básico:
 * 
 * Array é uma lista, uma coleção que armazena dados.
 * Podemos armazenas qualquer tipo de dado no array.
 * É uma boa prática manter um array com o mesmo tipo de dado.
 * O arrays também são indexados como os strings. Mas são indexados pelos elementos.
 * Se o índice do array não existir, ele será criado automaticamente em sua declaração. Se existir valor ele será substituído.
 * Na remoção ou na adicão inicial os índices são alterados.
 * Array em JavaScript são objetos.
 * Sempre opite por adicionar ou remover elementos no final do array.
 */


// Variáveis:
let alunoRemovido;

// Criando um array:
// Podição:     0       1        2
const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);
console.log();

// Acessando elementos do array por índice:
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log();

// Editando valores do array:
alunos[0] = "Eduardo";
console.log(alunos);
console.log();

// Adicionando um item no array em uma posição que não existe:
alunos[3] = "Fulano"; // Índice não existe no array. Será criado automaticamente.
console.log(alunos);
console.log();

// Verificando o tamanho do array:
console.log(alunos.length);
console.log();

// Adicionar um item ao array utilizando o 'length':
alunos[alunos.length] = "Luiza";
alunos[alunos.length] = "Fábio";
alunos[alunos.length] = "Luana";
console.log(alunos);
console.log();

// Adicionar elementos no início do array:
alunos.unshift("Carlos");
alunos.unshift("Erick");
console.log(alunos);
console.log();

// Adicionando elementos no final do array:
alunos.push("Otávio");
alunos.push("Tereza");
alunos.push("Marcos");
console.log(alunos);
console.log();

// Remover elementos do final do array:
// Obs.: O item removido pode ser armazenado em uma variável.
alunoRemovido = alunos.pop();
console.log(`Aluno removido: ${alunoRemovido}`);
console.log(alunos);
console.log();

// Remover elementos do início do array:
// Obs.: O item removido pode ser armazenado em uma variável.
alunoRemovido = alunos.shift();
console.log(`Aluno removido: ${alunoRemovido}`);
console.log(alunos);
console.log();