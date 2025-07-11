/**
 * - Funções em JavaScript:
 * 
 * Funções executam ações.
 * As regras para criar funções são as mesmas das variáveis.
 * Não encerramos o bloco de declaração da função com o ponto e vírgula.
 * Encerramos a declaração de funções anônimas com o ponto e vígula.
 * Tudo que está dentro da função fica protegido por ela.
 * Funções podem receber parâmetros.
 * funções sem retorno apresentam um 'undefined' quando são chamadas.
 * Tudo o que vier abaixo de 'return' não poderá mais ser executado.
 */


// Variáveis:
let saudacao;
let resultado;


// Declarando funções sem retorno:
function saudacao1(nome) { // Recebendo o parâmetro 'nome'.
    console.log(`Bom dia, ${nome}!`);
}

saudacao1('Erick');
saudacao1('Maria');
console.log(saudacao = saudacao1('Felipe')); // Retornará "Felipe" segiudo de um "undefined".
console.log();


// Declarando funções com retorno:
function saudacao2(nome) {
    return `Olá, ${nome}`;
}

console.log(saudacao2('Pedro Joaquim'));
console.log();


function soma(x, y) {
    resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma()); // Retornará um NaN.


// Declarando funções com valor padrão:
function soma2(x=1, y=2) {
    let resultado = x + y;
    return resultado;
}

console.log(soma2(10)); // O valor de 'y' foi omitido. 'Y' passará a valer o valor padrão contido no parâmetro da função.
console.log();


// Declarando função anônima:
const raiz_1 = function (n) {
    return Math.sqrt(n);
};
console.log(raiz_1(9));

// Declarando função anônima, "arrow function":
const raiz_2 = (n) => {
    return n ** 0.5;
}
console.log(raiz_2(16));

// Declarando função anônima, "arrow function": quando há apenas uma linha dentro do bloco.
const raiz_3 = (n) => n ** 0.5;
console.log(raiz_3(25));


// Declarando função anônima, "arrow function": quando há apenas "um parâmetro" e "uma linha dentro do bloco".
const raiz_4 = n => n ** 0.5;
console.log(raiz_4(36));
console.log();