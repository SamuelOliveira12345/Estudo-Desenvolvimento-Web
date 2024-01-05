/* 
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinha o número que estou pensando? Está entre 0 e 10"

  Crie uma logica para gerar um número aleatório e verificar se o numero digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não advinha o número, mostrar a mensagem: 
  "Errou, tente novamente!"

  Caso o usuário acerte o número, apresentar a mensagem: 
  "Parabens! Voce acertou o número em x tentativas"

  Substitua o "X" da mensagem pelo número de tentativas
*/

let numberRandom = Math.round(Math.random() * 10)

let result = prompt('Advinha o número que estou pensando? Está entre 0 e 10')

let attemps = 1

while(result != numberRandom){
  result = prompt("Errou, tente novamente!")
  attemps++
  }

alert(`Parabens! O número que eu pensei foi ${numberRandom} e você acertou o em ${attemps} tentativas`)
