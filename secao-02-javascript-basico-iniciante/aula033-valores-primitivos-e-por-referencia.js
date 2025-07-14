/* 
    - Valores primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol).
    
    Qualdo os valores são primitivos os valores são literalmente copiados.
*/

let a = 'A';
let b = a;
console.log(a, b);

a = 'B';
console.log(a, b);
console.log();


/* 
    - Valores por referência (mutáveis): array, object, function.

    Qualdo os valores são por referência os mesmos são referenciados e não copiados.
*/

let numeros = [1, 2, 3];
let outros_numeros = numeros;
console.log(numeros, outros_numeros);

numeros[0] = 10;
console.log(numeros, outros_numeros);

numeros.push(4);
console.log(numeros, outros_numeros);