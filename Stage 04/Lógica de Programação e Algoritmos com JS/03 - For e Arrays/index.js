/*
  Capture 10 itens para compor a lista de compra de um supermercado.

  Após capturar os 10 itens, imprima-os, separando por virgular
*/
let itens = []
let item = 0

for(item; item < 5; item++) {
  let itemName = prompt('Insira um produto na lista de compras')

  itens[item] = " " + itemName
}

alert(`Sua lista de compras é: ${itens}`)