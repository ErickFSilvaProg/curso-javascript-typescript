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

nome = "João";  // Inicializa-se a variável atribuindo um valor.
console.log(nome);

nome = "Pedro";
console.log(nome, "\n");

// let nome = "Carlos";
/*
    Redeclarar a variável 'nome' retornaria um erro parando o sistema:
    SyntaxError: Identifier 'nome' has already been declared
*/