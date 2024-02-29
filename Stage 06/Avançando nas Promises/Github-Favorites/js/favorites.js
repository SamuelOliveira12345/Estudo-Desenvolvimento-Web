import { GithubUser } from "./GithubUser.js"

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

  save () {
    localStorage.setItem('@github-favorities:', JSON.stringify(this.entries))
  }

  async add (username) {
    try {

      const userExists = this.entries.find(entry => entry.login == username)

      console.log(userExists)

      if(userExists) {
        throw new Error('Usuário já cadastrado')
      }

      const user = await GithubUser.search(username)
      
      if (user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()

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
    this.save()
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