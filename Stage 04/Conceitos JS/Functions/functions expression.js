// Function expression
// Funciton anonymous

// parâmetros or parameters
const sum = function(number1, number2){
  let total = number1 + number2
  return total
}
// Toda função retorna um valor

// é importante que nunca crie uma variável dentro de uma função sem o uso das palavras reservadas "var, let ou const" pois ela também irá ser acessível fora da função podendo resultar em erros ao decorrer do codigo.

// as variáveis "var, let e const" que forem utilizadas dentro da função não serão acessíveis fora do escopo.

// argumentos or arguments
let number1 = 62
let number2 = 10

//chamando a function
console.log(`A soma é ${sum(number1, number2)}`)

// Para melhor entendimento

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')

console.log(copo)

or 

function fazerSuco(fruta1, fruta2) {
  return `O suco é de ${fruta1 + fruta2}`
}

const copo2 = fazerSuco('banana', 'maça')

console.log(copo2)