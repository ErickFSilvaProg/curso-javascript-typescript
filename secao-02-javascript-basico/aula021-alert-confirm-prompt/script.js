/**
 * Sempre que colocamos (parênteses) estamos chamando uma função ou um método.
 * Uma função ou método executa uma ação.
 * 
 * Quando uma função está dentro de um objeto a chamamos de método.
 * Se estiver fora de um método, a chamamos de função.
 * 
 * No console.log() estamos chamando o método 'log()' que está dentro do objeto 'console'.
 * 
 * Dentro do objeto 'window' temos:
 * 
 *      console.log(): Mensagem no terminal.
 *      alert(): Caixa de mensagem no navegador. Não ha retorno no alert().
 *      confirm(): Tomada de decisão, confirmar ou negar. Ela retorna valor boolean: true ou false.
 *      prompt(): Solicita uma interação com o usuário. Retorna no terminal o que foi digitado.
 */


let nomeLivro = null;
let cadLivro = confirm("Cadastrar livro?");

if (cadLivro) {
    nomeLivro = prompt("Nome do livro: ");

    console.log(`Livro cadastrado: ${nomeLivro}`);
    alert(`Livro cadastrado: ${nomeLivro}`);
}
else {
    console.log("Fica para depois.");
    alert("Fica para depois.");
}