/**
 * - Strings: As strings são indexadas.
 */

// Índices:      01234567
let umaString = "Um texto";
//                           1         2         3
// Índices:        0123456789012345678901234567890123
let outraString = "O rato roeu a roupa do rei de roma";

// Saída normal:
console.log("- Saída normal:");
console.log(umaString);
console.log(outraString);
console.log();

// Retorna caracteres específicos:
console.log("- Retorna caracteres específicos:");
console.log(umaString[4]);
console.log(umaString[8]); // Retorna 'undefined', não existe na memória.
console.log(umaString[-1]); // Retorna 'undefined', não existe na memória.
console.log(umaString.charAt(6));
console.log(umaString.charAt(8)); // Retorna um vazio.
console.log();

// Concatenação:
console.log("- Concatenação:");
console.log(umaString.concat(" em", " um dia."));
console.log(umaString + " em um dia.");
console.log(`${umaString} em um dia.`);
console.log();

// Pesquisando por índice:
console.log("- Pesquisando por índice:");
console.log(umaString.indexOf("texto"));
console.log(umaString.indexOf("Texto")); // Retorna '-1' quando não encontrado.
console.log(umaString.indexOf("Um", 3)); // Retorna '-1' quando não encontra a referência a partir do índice informado.
console.log(umaString.indexOf("o", 3));
console.log(umaString.lastIndexOf("m", 3)); // Pesquisa do final para o início.
console.log();

// 