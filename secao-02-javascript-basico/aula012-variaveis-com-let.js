/** 
 * Não podemos redeclarar variáveis com 'let'.
 * Crie variáveis com 'let', não utilise 'var'.
 * Não podemos criar variáveis com palavras reservadas.
 * As variáveis precisam ter nomes significativos.
 * Não podemos iniciar o nome de variável com um número.
 * As variáveis não podem conter espaços ou traços.
 * Criamos variáveis no formato camelCase.
 * As variáveis são case-sensitive.
*/


let nome; // Declarar uma variável e não inicializa-la retorna um valor 'undefined'.
console.log(nome);

// let nome = "Carlos";
/*
    Redeclarar a variável 'nome' retornaria um erro parando o sistema:
    SyntaxError: Identifier 'nome' has already been declared
*/

nome = "Pedro"  // Inicializa-se a variável 'nome' e atribui um valor.
console.log(nome, "\n");

nome = "João"; // Reatribuindo valor a variável 'nome'.
let esposa = "Maria";
let filho = "Eduardo";

console.log(`${nome} nasceu em 1984.`);
console.log(`Em 2000 ${nome} conheceu ${esposa}.`);
console.log(`${nome} casou-se com ${esposa} em 2012.`);
console.log(`${esposa} teve 1 filho com ${nome} em 2015.`);
console.log(`O filho de ${nome} se chama ${filho}.`);
console.log();


let nomeCompleto = 'Erick Ferreira da Silva';
console.log(nomeCompleto);