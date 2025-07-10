// Exercício: number e math

let numero = Number(prompt('Digite um número:'));

let numero_titulo = document.getElementById('numeroTitulo');
let painel = document.getElementById('painel');

numero_titulo.innerHTML = numero;

painel.innerHTML = `<p>Seu número é ${numero}</p>`;
painel.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
painel.innerHTML += `<p>${numero} é inteiro?: ${Number.isInteger(numero) ? 'Sim':'Não'}</p>`;
painel.innerHTML += `<p>É NaN?: ${isNaN(numero) ? 'Sim':'Não'}</p>`;
painel.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
painel.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
painel.innerHTML += `<p>Com duas casas decimais: ${Math.sqrt(numero).toFixed(2)}</p>`;