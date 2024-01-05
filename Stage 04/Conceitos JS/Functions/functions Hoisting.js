// Function Hoisting

// A função só sofrerá o hoisting quando ela for do tipo function statement ou seja, uma função declarada. EX.:

myName()

function myName(){
  console.log('Samuel')
}

// Caso faça uso de palavras reservadas como "var, let e const" ela não sofrerá o hoisting e dará erro, pois reconhecá que a palavra não é uma variavel e sim uma função por estár fazendo o uso dos ().

//Exemplo de como não sofrerá o hosting:

myAge()

var myAge = function(){
  console.log('Samuel')
}