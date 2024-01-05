/* 
  Facça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa

  ---
  O programa deverá capturar o número digitado pelo usuario e mostrar os seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista.
  Caso o usuário digite 2, ele poderá ver os itens cadastrados.
    Se não houver nenhum item cadastrado, mostrar a mensagem:
      "Não existe itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/
let name = prompt('Qual é o seu nome?')
let input 
let itenList = []
while(input != 3){
  input = Number(prompt(`
    Olá ${name}! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))
  
  switch(input) {
    case 1:
      let item = prompt('Digite o item que deseja adicionar na sua lista de compras:')
      itenList.push(item)
      break
    case 2:
      if(itenList.length == 0){
        alert("Não existem itens cadastrados")
      } else {
        alert(itenList)
      }
      break
    case 3:
      alert('Valeu roxera')
      break
    default:
      alert("Digite uma opção válida!")
  }
}