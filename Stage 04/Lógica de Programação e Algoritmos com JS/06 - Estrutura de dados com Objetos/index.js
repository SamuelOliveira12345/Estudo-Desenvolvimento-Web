/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome.
*/

const patients = [
  {
    name: 'João',
    age: 30,
    weight: 76,
    height: 168
  },
  {
    name: 'Marta',
    age: 19,
    weight: 112,
    height: 192
  },
  {
    name: 'Paulo',
    age: 46,
    weight: 94,
    height: 179
  },
  {
    name: 'Dona',
    age: 16,
    weight: 52,
    height: 161
  },
  {
    name: 'Lelaaa',
    age: 28,
    weight: 65,
    height: 170
  },
]

let patientsName = []

for (let patient of patients) {
  
  patientsName.push(patient.name)

}

alert(patientsName)

// Agora escreva uma lista contendo o nome, idade, peso e altura sendo apresentados em um alerta.


for (let patient of patients) {
 console.log(`
    ${patient.name} tem ${patient.age} anos, ${patient.weight}kg e ${patient.height/100} de altura.
 `)
}

// Informar a quantidade de pacientes cadastrados na lista

alert(`
  A lista tem um total de ${patients.length} pacientes cadastrados.
`)