// Classe para tratar os dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'samuel-d3v',
        name: 'Samuel Oliveira',
        public_repos: '548',
        followers: '5156',
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '951',
        followers: '25000',
      }
    ]
  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)
   
    this.entries = filteredEntries
    this.update()
  }

}

// Classe para tratar a parte visual
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    
    this.tbody = this.root.querySelector("table tbody")

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.creatRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = removeTr => {
        const isOk = confirm('Tem certeza que deseja remover essa linha?')
        if(isOk) {
          this.delete(user)
        }
      }     
    
      this.tbody.append(row)
    })
  }

  creatRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <tr>
      <td class="user">
        <img src="https://github.com/samuel-d3v.png" alt="Foto Github">
        <a href="https://github.com/samuel-d3v" target="_blank">
          <p>Samuel Oliveira</p>
          <span>samuel-d3v</span>
        </a>
      </td>
      <td class="repositories">
        548
      </td>
      <td class="followers">
        5156
      </td>
      <td>
        <button class="remove">
          Remover
        </button>
      </td>
    </tr>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => tr.remove())
  }
}