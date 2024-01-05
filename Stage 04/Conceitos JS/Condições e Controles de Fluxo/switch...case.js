// switch

/*
  switch (expression) {
    case 'a':
      //código
      break [O uso do break é para parar o caso em questão]
    
    case 'b':
      //código
      break

    default:
      //código default
      break
  }  
*/

//exemplo

function calculator (number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break

      case '-':
        result = number1 - number2
        break

      case '*':
        result = number1 * number2
        break

      case '/':
        result = number1 / number2
        break
        
      default:
        console.log('Digite um operador válido!')
        break
  }

  return result
}

console.log(calculator(5, '/', 5))