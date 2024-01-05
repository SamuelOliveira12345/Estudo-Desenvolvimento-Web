/*
  Prototype
  
  * prototype-based language
  * prototype chain
  * __proto__  
*/

//O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

// Para utiliza-los basta inserir um "." após o dado, ou seja, no caso de uma strig poderia utilizar 'Samuel'. 

'Samuel'.length
// O comando length irá contas quantos caracteres existem na palavra utilizada de forma automática somente fazendo uso do prototype.

// Ex.:

console.log('Samuel'.length)

// Para contar a quantidade de números existentes terá que transformar os números em string. Ex.:

number = 1234565

console.log(string(number).length)

// Dessa forma o retorno seria "8", ou seja, existem 8 números na variável number