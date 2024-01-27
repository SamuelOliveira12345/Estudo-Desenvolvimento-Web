import state from "./state.js"
import * as el from './elements.js';

export function countdown() {
  if(!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--

  if (seconds < 0) {
    seconds = 59
  }

    
  updateDisplay(minutes, seconds)
  
  setTimeout(() => countdown(), 1000)

}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2,"0");
  el.seconds.textContent = String(seconds).padStart(2,"0");
  // o operador "??" quer dizer nullish coalescing operator
  
  /*É utilizado para fornecer um valor padrão quando o valor à esquerda é null ou undefined. Ele retorna o valor à esquerda se este não for nulo ou indefinido; caso contrário, retorna o valor à direita. Essa funcionalidade é útil para definir valores padrão em situações em que você deseja usar um valor alternativo apenas se o valor original for nulo ou indefinido.*/
}
