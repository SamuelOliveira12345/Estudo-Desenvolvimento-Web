# 1º - No main.js
  1º passo: Importar o FavoritesView da seguinte forma => import { FavoritesView } from "./favorites.js";
  2º passo: Criar uma instancia do FavoritesView da seguinte forma => new FavoritesView('#app')

# 2º - No favorites.js
  # 2.1º - Classe Favorites
    1º passo: Criar e exportar a classe Favorites da seguinte => export class Favorites {}
    2º passo: criar o metodo constructor e passar o argumento "root" da seguinte forma => constructor(root) {}
    3º passo: Buscar pelo seletor "root" e salvar na variável root, inserir o this pois será utilizado de fora do escopo. => this.root = document.queryselector(root)
  
  # 2.2º - Classe FavoritesView
    1º Passo: Criar e exportar a classe Favorites extendendo da Classe Favorites, da seguinte => export class FavoritesView extends Favorites {}
    2º Passo: criar o metodo constructor e passar o argumento "root" da seguinte forma => constructor(root) {} (igual a 2ª etapa da classe Favorites)
    3º Passo: utilizar o "super" para criar um "link" entre as duas classes, ligando uma a outra, da seguinte forma => super(root)

# Explicando o código até aqui
  1º - No main é criado uma instancia (um objeto) da classe FavoritesView, ou seja, está iniciando a classe e passando o #app para dentro da classe.
  2º - A classe FavoritesView nesse momento está recebendo o #app e passando para o super. A classe está sendo extendida pela classe Favorites, então o super irá jogar o #app para a classe Favorites. (Quando a classe é extendida é como se o super() se tornasse o construtor da classe que está extendendo, ou seja, o super é o contrutor da classe Favorites).
  3º - A classe Favorites está recebendo o #app da classe favoritesView e buscando no HTML por "#app" e salvando o resultado na variavel this."root".
  # A partir desse momento o *id="app"* poderá ser manipulado tbm pela classe FavoritesView fazendo o uso do "this." e inserindo a variável root
