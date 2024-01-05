//Variaveis das classes
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

//Variaveis dos botões
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

//Guardar na variavel "numberRandom" um número aleatório de 0 a 10
let numberRandom = Math.round(Math.random() * 10); 

//Iniciar a partir de 1 tentativa
let attempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleEnter);

//Funções callback
function stateScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleTryClick(event) {
  // Não usar o evento padrão, ou seja, não enviar o form e não atualizar a pag.
  event.preventDefault(); 
  
  // Procurar pelo ID="inputNumber" e guardar na constante inputNumber.
  const inputNumber = document.querySelector("#inputNumber"); 
  
  if((inputNumber.value) === "" || Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("Escolha um número entre 0 e 10");
  }
  else { 
    if (Number(inputNumber.value) == numberRandom) {
      /*procurar na documentação pela class="screen1" e adicionar a palavra "hide" e remover da "screen2".
      screen1.classList.add('hide'); 
      screen2.classList.remove('hide'); */

      stateScreen();
      
      //procurar na documentação por "h2"
      screen2.querySelector('h2').innerText = `Acertou em ${attempts} tentativas!`; // substituir o texto padrão por `Acertou em "x" tentativas!`
    }

    //Zerar o número digitado sempre que clicar em "tentar"
    inputNumber.value = "";
    
    // somar 1 e armazenar o resultado
    attempts++ 
  }
}

function handleResetClick() {
  stateScreen()

  attempts = 1;
  numberRandom = Math.round(Math.random() * 10);
}

function handleEnter(e){
  if(e.key === 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick();
  } 
}