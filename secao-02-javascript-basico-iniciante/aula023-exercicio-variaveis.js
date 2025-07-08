// Exercício

let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(`A = ${varA}, B = ${varB}, C = ${varC}`);

// 1ª maneira:
// varApoio = varA;
// varA = varB;
// varB = varC;
// varC = varApoio;

// console.log(`A = ${varA}, B = ${varB}, C = ${varC}`);

// 2ª maneira:
[varA, varB, varC] = [varB, varC, varA]
console.log(`A = ${varA}, B = ${varB}, C = ${varC}`)