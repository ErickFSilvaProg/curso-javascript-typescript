/**
 * Podemos alterar os valores de um array, declarado como 'constante'. Mas não podemos reatribuir novos valores.
 * 
 * Quando uma função está dentro de um objeto ela é chamado de método.
 * Métodos executam ações.
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
console.log();


// Criando objeto:
const pessoa1 = {
    'nome': 'Erick',
    'sobrenome': 'Ferreira',
    'idade': 38
};

console.log(pessoa1);
console.log();


// Criando objetos com funções, opção 1: (factory function)
function criaPessoa10(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa11 = criaPessoa10('Erick', 'Ferreira', 38);
const pessoa12 = criaPessoa10('Maria', 'Lemos', 65);
console.log(pessoa11);
console.log(pessoa12);
console.log();


// Criando objetos com funções, opções 2: (factory function)
function criaPessoa20(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa21 = criaPessoa20('João', 'Vinucius', 10);
const pessoa22 = criaPessoa20('Antônio', 'Martins', 47);
console.log(pessoa21);
console.log(pessoa22);
console.log();


// Criando método dentro do objeto:
const pessoa2 = {
    nome: 'Erick',
    sobrenome: 'Ferreira',
    idade: 38,

    // Criando o método 'fala' dentro do objeto 'pessoa2':
    fala(profissao) { // Não precisa colocar a palavra 'function'.
        return `${this.nome} ${this.sobrenome} está falando: "Sou ${profissao}"`;
    }
};

console.log(pessoa2.fala('Programador'));
console.log();

console.log(pessoa2);
console.log();