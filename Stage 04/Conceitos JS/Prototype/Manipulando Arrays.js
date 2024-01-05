// Manipulando Arrays

// Transformar String para Array

let word = 'manipulação'
console.log(Array.from(word))

/*
  O metodo .from é uma função atrelada ao Array, com ele é possível transformar uma string para array
*/

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')

// adicionar um item no inicio
techs.unshift('sql')

// remover do fim
techs.pop()

// remover do inicio
techs.shift()

// pegar somente alguns elementros do array

console.log(techs.slice(1, 2))

/* 
  Para usar o metodo "slice" é necessário escolher apartir de qual elemento que vai querer remover, e depois informar até onde ir, ou seja, o intervalo entre os números são os elementos que permanecerão
*/

// Remover 1 ou mais itens em qualquer posição do array

 techs.splice(0, 1)

/* 
  Para utilizar o metodo "splice" é necessério informar apartir de qual posição que remover e quantos deseja remover a partir da posição escolhida
*/

let index = techs.indexOf('css')

/*
  O metodo indexOf serve para informar qual a posição dentro do array da palavra especificada  
*/

console.log(index)