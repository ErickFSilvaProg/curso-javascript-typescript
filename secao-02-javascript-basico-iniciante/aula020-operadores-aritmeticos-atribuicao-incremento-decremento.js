// Operadores de aritméticos, atribuição e incremento

/**
 * - Operadores Aritméticos: (Em ordem de precedência)
 * 
 *      () -> Parenteses.
 *      ** -> Potenciação.
 *      *  -> Multiplicação.
 *      /  -> Divisão.
 *      %  -> Módulo - Retorna o resto da divisão.
 *      +  -> Adição / Concatenação.
 *      -  -> Subtração.
 * 
 * 
 *  - Operadores de Incremento:
 * 
 *      ++ -> (pré) e (pós) Incremento.
 *      -- -> (pré) e (pós) Decremento.
 * 
 * 
 *  - Operadores de Atribuição:
 * 
 *      **= -> Atribui potenciando.
 *      *=  -> Atribui multiplicando.
 *      /=  -> Atribui dividindo.
 *      %=  -> Atribui o resto da divisão.
 *      +=  -> Atribui somando.
 *      -=  -> Atribui subtraindo.
 * 
 * 
 * - NaN - Not a Number
*/


// Variáveis:
let num1 = 1;
let num2 = 2;
let num3 = '3';
let num4 = '4.5';
let contador = 10;
let nome = 'Erick';


// Concatenação:
console.log("Concatenação:");
console.log(num2 + num3);
console.log();


// Parênteses:
console.log("Parênteses:");
console.log(num1 + (num1 * num2));
console.log(num2 ** (num1 + num2));
console.log(num3 ** (num1 + num2));
console.log();

// Potenciação:
console.log("Potenciação:");
console.log(num1 ** num2);
console.log(contador ** num1);
console.log();

// Multiplicação:
console.log("Multiplicação:");
console.log(num1 * num2);
console.log();

// Divisão:
console.log("Divisão:");
console.log(num1 / num2);
console.log();

// Módulo:
console.log("Módulo:");
console.log(num1 % num2);
console.log();

// Adição:
console.log("Adição:");
console.log(num1 + num2);
console.log();

// Subtração:
console.log("Subtração:");
console.log(num1 - num2);
console.log();


// Pré-incremento:
console.log("Pré-incremento:");
console.log(++contador);
console.log();

// Pós-incremento:
console.log("Pós-incremento:");
console.log(contador++);
console.log(contador);
console.log();


// Pré-decremento:
console.log("Pré-decremento:");
console.log(--contador);
console.log();

// Pós-decremento:
console.log("Pós-decremento:");
console.log(contador--);
console.log(contador);
console.log();


// Atribui potenciando:
console.log("Atribui potenciando:");
console.log(contador **= 10);
console.log();

// Atribui multiplicando:
console.log("Atribui multiplicando:");
console.log(contador *= 2);
console.log();

// Atribui dividindo:
console.log("Atribui dividindo:");
console.log(contador /= 2);
console.log();

// Atribui o resto da divisão:
console.log("Atribui o resto da divisão:");
console.log(contador %= 2);
console.log();

// Atribui somando:
console.log("Atribui somando:");
console.log(contador += 2);
console.log();

// Atribui subtraindo:
console.log("Atribui subtraindo:");
console.log(contador -= 2);
console.log();


// NaN - Not a Number:
console.log("NaN - Not a Number:");
console.log(num1 * nome);
console.log(num1 + nome); // Haverá uma concatenação.
console.log();


// parseInt: Converte para 'integer'
console.log("parseInt: Converte para 'integer'");
console.log(num2 + num3);
console.log(num2 + parseInt(num3));
console.log();

// parseFloat: Convete para 'float':
console.log("parseFloat: Convete para 'float'");
console.log(num2 + num4);
console.log(num2 + parseFloat(num4));
console.log(num2 + parseInt(num4));
console.log();

// Number: Converte de forma automática em 'integer' ou 'float'
console.log("Number: Converte de forma automática em 'integer' ou 'float'");
console.log(num2 + Number(num3));
console.log(num2 + Number(num4));
console.log();