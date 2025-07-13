/**
 * Podemos alterar os valores de um array, declarado como 'constante'. Mas não podemos reatribuir novos valores.
 */

// Array:
const array = [1,2,3];
console.log(array);

// Adicionando elemento no final do array:
array.push(4);
console.log(array);

// Editando uma posição específica no array:
array[0] = 'Erick';
console.log(array);


// Criando objeto:
const pessoa = {
    'nome': 'Erick',
    'sobrenome': 'Ferreira',
    'idade': 38
};

console.log(pessoa);


// Criando objetos com funções, opção 1:
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Erick', 'Ferreira', 38);
console.log(pessoa1);