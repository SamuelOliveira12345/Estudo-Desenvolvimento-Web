export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  error: document.querySelector('#error'),
  btnClose: document.querySelector('#btnClose'),

  open() {
    Modal.wrapper.classList.toggle('open'); // Adiciona a classe "open", habilitando a exibição 
  }, 

  close() {
    Modal.wrapper.classList.remove('open');
  },
}

Modal.btnClose.onclick = () => {

  Modal.close(); // Remove a classe "open" desabilitando a exibição 

  inputWeight.value = ''; // Limpa o campo de peso
  inputHeight.value = ''; // Limpa o campo de altura
}

window.addEventListener('keydown', handleKeyDown);
function handleKeyDown (event){
  if (event.key === "Escape") {
    Modal.close(); 
    
    inputWeight.value = '';
    inputHeight.value = '';
  }
};