let numero = Number(prompt("Digie um número:"));

let numeroTitulo = document.getElementById("numero-titulo");
let textoMensagem = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

textoMensagem.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
textoMensagem.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
textoMensagem.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
textoMensagem.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
textoMensagem.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
textoMensagem.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;