import { Modal } from "./modal.js";

// Variáveis
const inputHeight = document.querySelector('#inputHeight');
const inputWeight = document.querySelector('#inputWeight');
const form = document.querySelector('form');

// Functions
form.onsubmit = event => {
  event.preventDefault(); // remover o padrão do botão

  const height = inputHeight.value;
  const weight = inputWeight.value;
  
  const result = imc(height, weight);
  
  const showAlertError = notNumber(weight) || notNumber(height);
  
  if (showAlertError) {
    error.removeAttribute('hidden');
  
    setTimeout(() => {
    error.setAttribute('hidden', 'true');
    }, 3000)
    return
  }
  
  Modal.open();

  Modal.wrapper.querySelector('h2').textContent = `Seu IMC é de ${result}`; // Alterar o texto de origem do h2
};

Modal.btnClose.onclick = () => {

  Modal.close(); // Remove a classe "open" desabilitando a exibição 

  inputWeight.value = ''; // Limpa o campo de peso
  inputHeight.value = ''; // Limpa o campo de altura
}

function imc (height, weight) {
  return (weight / ((height/100) ** 2)).toFixed(2);
};

function notNumber (value) {
  return isNaN(value) || value == "";
}