// callback function

function myName(age){
  console.log('Meu nome é Samuel')

  age()

  console.log('Estudo progração')
}

myName(
  () => {
    console.log('Tenho 28 anos')
  }
)

// Uma callback (chamar de volta) nada mais é do que uma função, literalmente, sendo "chamada de volta" de dentro da outra conforme o código descrito acima.