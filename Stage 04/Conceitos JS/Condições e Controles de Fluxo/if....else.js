/*
 if....else

if(condition) {
  codigo de blocos
}
else{
  codigo de blocos
}*/

//Fluxo de uma aplicação
let temperatuta = 36.5

if(temperatuta >= 37){
  console.log('Febre')
} 
else {
  console.log('Saudavel')
}
// P.S.: Se for apenas como um alerta então não necessitaria do uso do else


// Fluxo de aplicação com multiplas condicionais
let tempCorpo = 3
if(tempCorpo > 36.5 && tempCorpo <= 37.5) {
  console.log("Febre baixa")
  
}
else if(tempCorpo > 37.5){
  console.log('Febre alta')
}
else{
  console.log('Não tem febre')
}

/* 
  DICA: Na condicional é interessante usar variáveis que descrevam o máximo possível o que será a condição.
 */