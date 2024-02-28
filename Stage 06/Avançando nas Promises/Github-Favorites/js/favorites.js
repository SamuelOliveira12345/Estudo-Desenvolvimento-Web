// Consumo de API do Github
export class GithubUser {
  static search(username){
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    .then(
      ({
        login, 
        name, 
        public_repos, 
        followers
      }) => 
      ({
        login,
        name,
        public_repos,
        followers,
      })
    )
  }
}

// Classe para a lógica dos dados, estruturando os dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorities:')) || []
    // O JSON.parse transforma uma string no seu dado de origem, ou seja, remove as aspas e deixa o restante do conteúdo.
  }

  async add (username) {
    try {
      const user = await GithubUser.search(username)
      
      if (user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [user, ...this.entries]
      this.update()

    } 
    catch(error) {
      alert(error.message)
    }
  }
      
  delete(user) {
    // higher-order functions
    const filteredEntries = this.entries.filter( entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
  }
}

// Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    
    this.tbody = document.querySelector('table tbody')


    this.update()
    this.onadd()
  }

  onadd () {
    const addButton = this.root.querySelector('.search button')

    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')

      this.add(value)
    }
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

      row.querySelector('.remove').onclick = () => {
        const isTrue = confirm('Tem certeza que desejar remover essa linha?')

        if(isTrue){
          this.delete(user)
        }
      }

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
        <button class='remove'>&times;</button>
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