const adicionaCor = document.querySelector('#elementoOndeVoceEsta').parentNode;
adicionaCor.style.color = 'red';

const adicionaTexto = document.querySelector('#primeiroFilhoDoFilho');
adicionaTexto.innerHTML = 'Sim, me lembro dos vídeos da aula anterior.';

const paiDoPrimeiroFilho = document.querySelector('#pai').firstChild;

const paiOndeEstou = document.querySelector('#elementoOndeVoceEsta').parentNode;

const atencao = document.querySelector('#elementoOndeVoceEsta').nextSibling;
console.log(atencao);

const terceiroFilho = document.querySelector('#elementoOndeVoceEsta').nextSibling.nextSibling;

const terceiroFilhoPai = document.querySelector('#pai').children[2];