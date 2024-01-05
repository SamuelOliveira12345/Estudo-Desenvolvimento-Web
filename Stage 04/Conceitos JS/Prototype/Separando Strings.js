// Manipulando Strings e Números

// Transformar um número quebrado com 3 casas decimais e trocar ponto por vírgula

let number = 856.32135632112354
console.log(`${number.toFixed(3)} é um número real`)

// O toFixed é uma função atrelada ao objeto number, ou seja, é um método. O toFixed espera receber o número de casas decimais que desejo ver

// Para trocar o ponto por vigula é necessário atrelar mais uma função, ou seja, inserir mais um método, sendo ele o replace.

console.log(`${number.toFixed(2).replace(".", ",")} é um número inteiro`)

// Para utilizar o método replace é necessário informar o que eu desejo alterar e pelo que, separando os mesmos por ','

// Ao trocar o ponto pela virgula o tipo da váriável number deixa de ser número para ser string, pois a virgula não faz parte dos números reais. 

let word = 'Programar é muito bom!'
console.log(word.toUpperCase())
console.log(word.toLowerCase())

let phrase = "Programar é bom demais"
let myArray = phrase.split(" ")
console.log(myArray)

// Com o split("") foi possível alterar a string para um array, separando as palavras a partir de espaços, no entanto poderia separar tbm a partir de letras ou outro caractere que fosse informado. 


let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

phraseWithUnderscore = myArray.join(" ")
console.log(phraseWithUnderscore)

// Com o join("") foi possível voltar alterar um array para uma string juntando todas as palavras atraves do underscore, no entanto podia ser unidas atraves de espaço em branco ou qualquer outro caractere que fosse informado.