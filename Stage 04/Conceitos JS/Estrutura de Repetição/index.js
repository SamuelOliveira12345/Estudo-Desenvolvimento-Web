// for...in
// O for...in serve para buscar propriedade de dentro de objetos, arrays, entre outros
let person = {
  name: 'Samuel',
  age: 28,
  weight: 105,
  height: 1.75
}

for(let property in person){
  console.log(property)
  console.log(person[property])
}