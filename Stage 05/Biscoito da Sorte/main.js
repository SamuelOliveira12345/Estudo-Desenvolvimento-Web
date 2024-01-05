// Variaveis das classes
const home = document.querySelector('.home');
const luck = document.querySelector('.luck');

// Variavel da imagem
const openCookie = document.querySelector('#openCookie');

// Variavel do botão
const btnReset = document.querySelector('#btnReset');

// Lista de frases para o biscoito da sorte
let phraseCookie = [
  "A vida trará coisas boas se tiveres paciência.",
  "O que importa não é o que você tem na vida, mas quem você tem na vida.",
  "O segredo para ter uma vida rica é ter sonhos pobres.",
  "Acredite em milagres, mas não dependa deles.",
  "Siga os teus sonhos, eles conhecem o caminho.",
  "A sorte favorece a mente bem preparada."
];

// Eventos
openCookie.addEventListener('click', handleOpenCookie);
btnReset.addEventListener('click', handleResetClick);

// Callback Function
function stateScreen() {
  home.classList.toggle('hide');
  luck.classList.toggle('hide');
}

function phraseGenerator() {
  let phrase = Math.floor(Math.random() * phraseCookie.length);

  return phraseCookie[phrase];
}

function handleOpenCookie () {
  stateScreen();
}

function handleResetClick (event) {
  event.preventDefault();

  luck.querySelector('p').innerText = phraseGenerator();

  stateScreen();
}

