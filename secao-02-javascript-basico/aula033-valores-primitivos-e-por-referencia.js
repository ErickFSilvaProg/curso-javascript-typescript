/**  
 * - Valores primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol). São valores copiados.
 * 
 * Quando os valores são primitivos os valores são literalmente copiados.
 */

/* VARIÁVEIS: */
let a = 'A';
let b = a;
console.log(a, b);

a = 'B';
console.log(a, b);
console.log();


/** 
 * - Valores por referência (mutáveis): array, object, function.
 * 
 * Quando os valores são passados por referência, os mesmos são apontados na memória e não copiados.
 */

/* ARRAYs: */
let aa = [1, 2, 3];
let bb = aa;
let cc = bb;

console.log(aa, bb);

aa.push(4);
console.log(aa, bb);

bb.pop();
console.log(aa, bb);

aa.push('Luiz');
console.log(aa, bb, cc);
console.log();

// Para copiar os valores de 'aa' para 'bb', faça assim:
bb = [...aa];
bb.pop();
console.log();

aa.push(5, 6);
console.log(aa, bb, cc);
console.log();


/* OBJETOS: */
let pessoa1 = {
    nome: 'Erick',
    sobrenome: 'Ferreira'
}
console.log(pessoa1);

let pessoa2 = pessoa1;
console.log(pessoa2);

pessoa1.nome = 'Gabriel';
console.log(pessoa2);

// Para copiar os valores da pessoa1 para a pessoa2, faça assim:
pessoa2 = {...pessoa1};
console.log(pessoa1, pessoa2);

pessoa1.nome = 'Erick';
console.log(pessoa1, pessoa2);