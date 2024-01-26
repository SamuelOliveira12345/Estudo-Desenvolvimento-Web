import state from "./state.js"

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = state.seconds
}

// o operador "??" quer dizer nullish coalescing operator

/*É utilizado para fornecer um valor padrão quando o valor à esquerda é null ou undefined. Ele retorna o valor à esquerda se este não for nulo ou indefinido; caso contrário, retorna o valor à direita. Essa funcionalidade é útil para definir valores padrão em situações em que você deseja usar um valor alternativo apenas se o valor original for nulo ou indefinido.*/