/*
  Solicitar ao usuário que ele insira dois números

    somar os dois números;
    subtrair os dois números;
    multiplicar os dois números;
    dividir os dois números;
    resto da divisão dos dois números;
*/

// Entradas de dados
let numberOne = Number(prompt('Digite o primeiro número: '))
let numberTwo = Number(prompt('Digite o segundo número: '))

// Variaveis com as operações matemáticas solicitadas
const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo
const parImpar = (numberOne + numberTwo) % 2

// Repetição para as saídas de dados
for(let index = 1; index <= 7; index++) {
  switch(index) {
    case 1: 
      alert(`A Soma dos dois números é: ${sum}`)
    break
    case 2:
      alert(`A subtração dos dois números é: ${sub}`)
    break
    case 3:
      alert(`A multiplicação dos dois números é: ${mult}`)
    break
    case 4:
      alert(`A divisão dos dois números é: ${div}`)
    break
    case 5:
      alert(`O resto da divisão dos dois números somados é: ${rest}`)
    break
    case 6:
      if(parImpar == 0){
        alert(`A soma dos dois números é par: ${sum}`)
      } else {
        alert(`A soma dos dois números é impar: ${sum}`)
      }
    break
    case 7:
      if(numberOne == numberTwo){
        alert('Os dois números são iguais!')
      } else {
        alert('Os dois números não são iguais!')
      }
    break
  }
}