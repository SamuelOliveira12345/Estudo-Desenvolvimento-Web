// Classe para a lógica dos dados, estruturando os dados
export class Favorites{
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'SamuelOliveira12345',
        name: 'Samuel Oliveira',
        public_repos: '76',
        followers: '15087',
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '951',
        followers: '1594875',
      }
    ]
  }
  
}

// Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    
    this.tbody = document.querySelector('table tbody')


    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.login}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user a').target = `_blank`
      row.querySelector('.user p').textContent = user.name
      row.querySelector(`.user span`).textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      
      this.tbody.append(row)
    }) 

  }

  createRow(){
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/SamuelOliveira12345.png" alt="Imagem de SamuelOliveira12345">
        <a href="https://github.com/SamuelOliveira12345" target="_blank">
          <p>Samuel Oliveira</p>
          <span>SamuelOliveira12345</span>
        </a>
      </td>
      <td class="repositories">
        54
      </td>
      <td class="followers">
        958
      </td>
      <td>
        <button>&times;</button>
      </td>
    `
    return tr
  }
  
  removeAllTr() {
  
    this.tbody.querySelectorAll("tr")
      .forEach((tr) => {
        tr.remove()
      }
    )
  }
}