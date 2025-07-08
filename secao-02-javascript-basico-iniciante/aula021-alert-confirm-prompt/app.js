/**
 * Sempre que colocamos (parênteses) estamos chamando uma função ou um método.
 * Uma função ou método executa uma ação.
 */

// Função - confirm():
let confirma = confirm('Deseja se identificar?');

if (confirma) {
    // Função - prompt():
    let nome = prompt('Digite seu nome: ');

    // Função - alert():
    alert(`Bem vindo, ${nome}!`);
} else {
    console.log('Programa encerrado!')
}