/* 
  Function() construtor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = () => {
    return this.name + ' está andando'
  }
}

const samuel = new Person('Samuel')
const lolita = new Person('Lolita')
/* Ao utilizar a palavra reservada "new" junto com a função, foi criado um objeto de forma automatica dentro da função, para trabalhar com esse objeto é necessário utilizar a palavra "this" seguido de um ponto e da variavel que desejar utilizar. */

console.log(samuel.walk())
console.log(lolita.walk())

// Para esses casos é uma boa prática utilizar a primeira letra da função em maiúscula.