// Importações dos scripts
import { Modal } from "./modal.js";
import { alertError } from "./alert-Error.js";
import { imc, notNumber } from "./utils.js";

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
    alertError.open();

    return
  }
  
  alertError.close(); // Fechar alerta
  
  Modal.open(); // Abrir modal

  Modal.wrapper.querySelector('h2').textContent = `Seu IMC é de ${result}`; // Alterar o texto de origem do h2
};

Modal.btnClose.onclick = () => {

  Modal.close(); // Remove a classe "open" desabilitando a exibição 

  inputWeight.value = ''; // Limpa o campo de peso
  inputHeight.value = ''; // Limpa o campo de altura
}

// Executar as funções quando começar a preencher o input
inputHeight.oninput = () => alertError.close();
inputWeight.oninput = () => alertError.close();