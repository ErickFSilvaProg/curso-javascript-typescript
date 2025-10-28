let varA = "A";
let varB = "B";
let varC = "C";
let varApoio = null;

/**
 * Método antigo de resolver o problema:
 * 
        varApoio = varA;
        varA = varB;
        varB = varC;
        varC = varApoio;

        console.log(varA);
        console.log(varB);
        console.log(varC);
        console.log();
 */


// Método atual para resolver o problema:
[varA, varB, varC] = [varB, varC, varA]

console.log(`A = ${varA}`);
console.log(`B = ${varB}`);
console.log(`C = ${varC}`);
console.log();