/*

let name = prompt('Qual o nome do aluno?')
let nota1 = prompt('Qual a primeira nota?')
let nota2 = prompt('Qual a segunda nota?')
let nota3 = prompt('Qual a terceira nota?')

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

let media = ((nota1 + nota2 + nota3) / 3).toFixed(2)

if(media > 6) {
  alert(`${name} você passou, a sua nota média foi: ${media}`)
} else{
  alert(`${name} você não passou por média, estude mais para a prova de recuperação! A sua média foi: ${media}`)
}

or

*/

let name = prompt('Qual o nome do aluno?')
let nota1 = prompt('Qual a primeira nota?')
let nota2 = prompt('Qual a segunda nota?')
let nota3 = prompt('Qual a terceira nota?')

// Conversão direta de String para Number na mesma linha do cálculo da média
let media = ((Number(nota1) + Number(nota2) + Number(nota3)) / 3).toFixed(2)

let result = media > 6

// Se a média é maior que 6 então passou, se não, ficou em recuperação
if(result) {
  alert(`${name} você passou, a sua nota média foi: ${media}`)
} else {
  alert(`${name} você não passou por média, estude mais para a prova de recuperação! A sua média foi: ${media}`)
} 

/*
  Fazendo a conversão direta de String para Number economiza mais linhas e deixa o código mais clean
*/