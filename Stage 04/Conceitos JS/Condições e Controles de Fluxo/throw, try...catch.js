// throw or Disparar ou lançar

// try...catch 
  // try or tentar
  // catch or capturar
  
  /* Em resumo, se houver um erro o throw vai DISPARAR esse erro e o try vai TENTAR executar algum block de código (ou tentar executar o mesmo código/função) e se retornar um erro o catch irá CAPTURAR e guardar para que o erro possa ser visto quando solicitado. 
  */

  // Lembrando que se utilizar o throw sem o try...catch e houver algum erro, irá quebrar todo o código.
  // Então é importante sempre utilizar o throw em conjunto com o try...catch para que o erro seja salvo e o restante do código prossiga normalmente.

// FORMA DE SE UTILIZAR O throw e try...catch

//throw
function sayMyName (name = '') {
 if (name === ''){
    throw 'Nome é obrigatório' //or throw new Error('Nome é obrigatório') dessa forma será criado um objeto do tipo ERROR com a mensagem do erro.
 }
   console.log('essa mensagem não será exibida pois o throw irá encerrar a aplicação')

 // A função nomeada como "sayMyName" tem como argumento que o nome é vazio (nome = '') e em sua declaração diz SE (if) o nome for extritamente igual a vazio (nome === '') então {} será disparado uma mensagem de erro informando a obrigatoriedade que seja inserido um nome (throw 'Nome é obrigatório').
}

//try...catch
try {
  sayMyName()
  // a declaração try está tentando chamar novamente a função "sayMyName"

} catch(e) {
  console.log(e)
} // a declaração catch está salvando na variavel "e" o erro reportado pela declaração throw

console.log('Após o try...catch')
