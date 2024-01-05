// Function Scope

let subject1

function createThink(){
  subject = 'study'
}

createThink()
console.log(subject)

// Se o parametro da função não for definido então ele irá buscar a variável no escopo anterior, então nesse caso ele irá atualizar a variável e elas terão o mesmo resultado

let subject2 = 'ausente'

function createThink2(subject2){
  subject2 = 'student'
  return subject2
}

console.log(createThink2(subject2))
/* tbm pode ser chamado como:
createThink2()
console.log(subject2)*/

console.log(subject2)

// Como o parametro da função foi definido, caso uma das variáveis tenha o seu valor alterado não afetará a outra pois elas estão em escopos diferentes
