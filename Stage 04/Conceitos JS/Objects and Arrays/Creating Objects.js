//Criando objetos or creating object

const person = {
  name: "Samuel",
  age: 28,
  weight: 105,
  isAdmin: true
}

//Para chamar um item declarado dentro do objeto é necessário utilizar chamar o nome do objeto, utilizar um ponto e logo após chamar a variavel. EX:
console.log(person.name)

//Para chamar várias variaveis que estão dentro de um object é possível chama-los contatenando. EX:
console.log(`O ${person.name} tem ${person.age} anos`)