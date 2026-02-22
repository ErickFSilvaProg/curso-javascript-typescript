/**
 * - Funções em JavaScript:
 * 
 * Funções executam ações.
 * As regras para criar funções são as mesmas das variáveis.
 * Não encerramos o bloco de declaração da função com o ponto e vírgula.
 * Encerramos a declaração de 'funções anônimas' com o ponto e vígula.
 * Tudo que está dentro da função fica protegido por ela.
 * Funções podem receber parâmetros.
 * Funções sem retorno apresentam um 'undefined' quando são chamadas.
 * Tudo o que vier abaixo de 'return' não poderá mais ser executado.
 * Crie funções únicas com apenas uma especialidades.
 */


/* Declarando funções sem retorno: */
function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`);
}

saudacao("Erick");
saudacao("Maria");
saudacao("Felipe");
console.log();

// Retornará "Bom dia, Felipe!" e em seguida um "underfined".
let msnSaudacao = saudacao("Luiz");
console.log(msnSaudacao);
console.log();


/* Declarando funções com retorno: */
function saudacao2(nome) {
    return `Bom dia, ${nome}`;
}

let msnSaudacao2 = saudacao2("Pedro");
console.log(msnSaudacao2);
console.log();

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma()); // Retornará um NaN.
console.log(soma("Erick", "Ferreira"));
console.log();


/* Declarando funções com valores padrões: */
function soma2(x = 1, y = 2) {
    let resultado = x + y;
    return resultado;
}

// O valor de 'y' foi omitido. 'Y' passará a valer o valor padrão contido no parâmetro da função.
console.log(soma2(10));
console.log();


/* Declarando funções anônimas: */
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));


/* Declarando funções anônimas: Arrow function */
const raiz2 = (n) => {
    return n ** 0.5;
}

console.log(raiz2(16));


/* Declarando funções anônimas: Arrow function. */
// Obs.: Quando há apenas uma linha dentro do bloco.
const raiz3 = (n) => n ** 0.5;

console.log(raiz3(25));


/* Declarando funções anônimas: Arrow function. */
// Obs.: Quando há apenas um parâmetro e uma linha dentro do bloco.
const raiz4 = n => n ** 0.5;

console.log(raiz4(36));
console.log();