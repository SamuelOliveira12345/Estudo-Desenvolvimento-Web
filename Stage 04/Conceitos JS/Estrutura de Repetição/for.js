// Estrutura de repetição
// for
/*
for(inicialização de uma variavel; condição de continuação do loop; expressão que acontecerá a cada rodada do loop) {
  bloco de código para cada rodada de execução do loop, sendo possível fazer dois tipos de controle de ações como o break e o continue
} */

for(let i = 1; i < 10; i++){
  console.log(i)
}

// controle de parar uma execução
for(let i = 1; i <= 20; i++){
  if(i === 15){
    break
  }

  console.log(i)
}

// controle de pular alguma coisa
for(let i = 5; i > 0; i--){
  if(i === 3){
    continue
  }

  console.log(i)
}





