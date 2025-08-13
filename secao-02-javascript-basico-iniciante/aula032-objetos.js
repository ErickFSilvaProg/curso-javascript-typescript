/**
 * Podemos alterar os valores de um array, declarado como 'constante'. Mas não podemos reatribuir novos valores.
 * 
 * Quando uma função está dentro de um objeto ela é chamado de método.
 * Métodos executam ações.
 * 
 * Os argumentos são os valores passados aos parâmetros.
 * 
 */

// Array:
console.log("- Array:");
const array = [1, 2, 3];
console.log(array);
console.log();

// Adicionando elemento no final do array:
console.log("- Adicionando elemento no final do  array:");
array.push(4);
console.log(array);
console.log();

// Não é possível reatribuir um valor a uma constante:
// Obs.: Isso irá gerar um erro em uma constante.
// array = "Reatribuição";


// Objeto:
console.log("- Objeto:");
const pessoa1 = {
    "nome": "Erick",
    "sobrenome": "Ferreira",
    "idade": 38
};

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log();

// Criando objetos com funções, opção 1: Factory function.
console.log("- Criando objetos com funções, opção 1: Factory function.");
function criaPessoa1(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa11 = criaPessoa1("Erick", "Sobrenome", 38);
const pessoa12 = criaPessoa1("Maria", "Lemos", 65);
console.log(pessoa11);
console.log(pessoa12);
console.log();

// Criando objetos com funções, opção 2: Factory function.
console.log("- Criando objetos com funções, opção 2: Factory function.");
function criaPessoa2(nome, profissao, tipo) {
    return {
        nome,
        profissao,
        tipo
    };
}

const pessoa21 = criaPessoa2("Erick", "Programador", "Web");
const pessoa22 = criaPessoa2("Júnior", "Engenheiro", "Software");
console.log(pessoa21);
console.log(pessoa22);
console.log();

// Criando método dentro de um objeto:
console.log("- Criando método dentro de um objeto:");
const pessoa3 = {
    nome: "Erick",
    sobrenome: "Ferreira",
    idade: 38,

    // Criando o método 'fala' dentro do objeto:
    fala(profissao) { // Não precisa colocar a palavra 'function'.
        return `${this.nome} ${this.sobrenome} está falando: "Sou ${profissao}."`;
    }
};

console.log(pessoa3);
console.log("Função fala:", pessoa3.fala("Programador"));
console.log();