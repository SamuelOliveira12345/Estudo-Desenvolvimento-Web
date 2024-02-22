// Classe para a lógica dos dados, estruturando os dados
export class Favorites{
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

// Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
  }
}