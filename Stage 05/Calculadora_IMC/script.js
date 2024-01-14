// Variáveis dos botões
const btnCalculate = document.querySelector('#btnCalculate');
const btnClose = document.querySelector('#btnClose');
const error = document.querySelector('#error')

// Variavei
const result = document.querySelector('#result');

// Variavel para o IMC
let imc = 0;

// Callback function
btnCalculate.addEventListener('click', calculate);
btnClose.addEventListener('click', close);

function calculate (event) {
  event.preventDefault(); // remover o padrão do botão

  // Variáveis das entradas de dados
  let height = Number(document.querySelector('#inputHeight').value);
  let weight = Number(document.querySelector('#inputWeight').value);
  
  imc = (weight / (height*height)).toFixed(2);

  if (!isNaN(height) && !isNaN(weight) && height && weight !== 0) {
    result.classList.toggle('hidden'); // Remove a classe "hidden" liberando a exibição 

    result.querySelector('h2').textContent = `Seu IMC é de ${imc}`; // Alterar o texto de origem do h2
  }
  else{
    error.removeAttribute('hidden');

    setTimeout(() => {
    error.setAttribute('hidden', 'true');
    }, 3000);
  }
}

function close (event) {
  result.classList.toggle('hidden'); // Acrescenta a classe "hidden" "proibindo" a exibição 

  inputWeight.value = ''; // Limpa o campo de peso
  inputHeight.value = ''; // Limpa o campo de altura
};