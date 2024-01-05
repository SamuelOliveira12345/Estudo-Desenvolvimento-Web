// Criando a lista de estudantes com suas respectivas notas
const students = [
  {
    name: 'Julia',
    noteOne: 6.5,
    noteTwo: 8
  },
  {
    name: 'Beatriz',
    noteOne: 8.5,
    noteTwo: 6
  },
  {
    name: 'Fernando',
    noteOne: 0.5,
    noteTwo: 10
  },
  {
    name: 'Ramon',
    noteOne: 2.5,
    noteTwo: 7.5
  },
  {
    name: 'Lelaaa',
    noteOne: 9.5,
    noteTwo: 9
  },
  {
    name: 'Luiz',
    noteOne: 6,
    noteTwo: 8
  }
]

// Função para calcular a média e informar se foi ou não aprovado(a)
function averageStudents (student) {
  let average = (student.noteOne + student.noteTwo) / 2

  if(average >= 7) {
    return `A média do(a) aluno(a) é: ${average} \nParabéns, ${student.name}! Você foi aprovado(a) no concurso!  
    `
  } else {
    return `A média do(a) aluno(a) é: ${average} \nNão foi dessa vez, ${student.name}! Não desanime e tente novamente em breve!
    `
  }
  
}

// Loop do resultado da função
for (const student of students) {
  let studentMessenger = averageStudents(student)
  
  alert(studentMessenger)
}