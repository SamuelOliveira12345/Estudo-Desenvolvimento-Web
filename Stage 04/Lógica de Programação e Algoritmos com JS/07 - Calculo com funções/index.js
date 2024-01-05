/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* 
  Calculo para o IMC:
  peso / (altura * altura) or peso / (altura^²) "altura elevado a segunda potencia"
*/

let patients = [
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

function imcPatient (imc) {
  alert (`
    O paciente ${imc.name} possui imc de: ${(imc.weight / ((imc.height / 100) ** 2)).toFixed(1)}
  `)
}

for(let patient of patients){
  imcPatient (patient)
}