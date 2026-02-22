/**
 * # Strings.
 * 
 *  - As Strings são indexadas.
 */

// Índices:      012345678
let umaString = "Um texto.";
//                           1         2         3
// Índices:        01234567890123456789012345678901234
let outraString = "O rato roeu a roupa do Rei de Roma.";

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
console.log(umaString.indexOf("texto")); // Retorna '-1' quando não encontrado.
console.log(outraString.indexOf("roupa"));
console.log(umaString.indexOf("Um", 3)); // Retorna '-1' quando não encontra a referência a partir do índice informado.
console.log(umaString.indexOf("o", 3));
console.log(umaString.lastIndexOf("m", 3)); // Pesquisa do final para o início.
console.log();

// Expressões regulares em String:
console.log("- Expressões regulares em String:");
console.log(umaString.match(/[a-z]/g)); // A flag 'g' representa um array.
console.log(umaString.match(/[a-z]/));
console.log();

// Realizando buscas com ou sem expressões regulares:
console.log("Realizando buscas com ou sem expressões regulares:");
console.log(umaString.search(/[a-z]/)); // Sempre será retornado o índice, colocando ou não a flag 'g'.
console.log(umaString.search(/[a-z]/g));
console.log(umaString.search(/x/)); // Será retornado o índice da letra 'x'.
console.log(umaString.search("texto"));
console.log();

// Substituindo caracteres/palavras no String:
console.log("- Substituindo caracteres/palavras no String:");
console.log(outraString);
console.log(outraString.replace("rato", "ratão"));
console.log(outraString.replace("O rato", "Outro rato"));
console.log(outraString.replace(/r/, "R")); // Substitui apenas o primeiro String encontrado.
console.log(outraString.replace(/r/g, "R")); // Com a flag 'g', todos os Strings são substituídos.
console.log();

// Retorna o tamanho da String:
console.log("- Retorna o tamanho da String:");
console.log(umaString.length); // O 'length' é um atributo da String e não uma função.
console.log(outraString.length);
console.log();

// Extração de String, busca por conteúdo:
console.log("- Fatiamento de String, busca por conteúdo:");
console.log(outraString);
console.log(outraString.slice(2, 5)); // Será extraído os String do intervalo indicado. O último índice não será lido.
console.log(outraString.slice(2, 6));
console.log(outraString.slice(-3)); // Começa extraíndo do final para o início, na posição inversa.
console.log(outraString.slice(32));
console.log(outraString.slice(-5, -1)); // Extrai filtrando a busca a partir do final.
console.log();

// Divide a String e agrupando em um array:
console.log("- Dividindo a String e agrupando em um array:");
console.log(outraString.split(" ")); // Divide a String utilizando o 'espaço' como separador.
console.log(outraString.split("r")); // Divide a String utilizando o 'r' como separador.
console.log(outraString.split(" ", 3)); // Divide recuperando apenas as posições informadas no segundo parâmetro.
console.log();

// Tornando a String toda maiúscula:
console.log("Tornando a String toda maiúscula:");
console.log(outraString);
console.log(outraString.toUpperCase());
console.log();

// Tornando a String toda munúscula:
console.log("Tornando a String toda munúscula:");
console.log(outraString);
console.log(outraString.toLowerCase());
console.log();