/**
 * # Strings.
 * 
 *  - As Strings são indexadas.
 */


//                          1         2         3         4
// Índices:       012345678901234567890123456789012345678901234
let texto_um =   'Brasil coração do mundo, pátria do evengelho.';
let texto_dois = 'Porque, agora, escolhi e santifiquei esta casa...';


// Saida normal:
console.log("- Saída normal:");
console.log(texto_um);
console.log(texto_dois);
console.log();


// Retorna caracteres específicos:
console.log("- Retorna caracteres específicos:");
console.log(texto_um[4]);
console.log(texto_um[45]); // Retorna 'undefined', não existe em memória.
console.log(texto_um[-1]); // Retorna 'undefined', não existe em memória.
console.log(texto_um.charAt(7));
console.log(texto_dois.charAt(50)); // Retorna um vazio. A posição não existe na variável.
console.log();


// Concatenações:
console.log("- Concatenação:");
console.log(texto_um.concat(' Pelo espírito: ', 'Emmanuel.'));
console.log(texto_dois + ' Livro de Crônicas.');
console.log(`${texto_um} Médium: Francisco Cândido Xavier.`);
console.log();