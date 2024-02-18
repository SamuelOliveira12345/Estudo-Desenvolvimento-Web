export class Router {
  routes = {}

  add(routeName, pages) {
    this.routes[routeName] = pages
  }

  route (event) {
    event = event || window.event // Usar o evento da função ou o evento do window (o evento do HTML).
    event.preventDefault() // removendo o padrão
    
    window.history.pushState({},'', event.target.href) // registrando no histórico do window a navegação entre as paginas.
    
    this.handle()

    const action = window.event.target.dataset.action
    if(action === "universe"){
      history.pushState({}, '', '/universe')
      
      return this.handle()
    }

    const home = window.event.target.dataset.home
    if(home === "home"){
      history.pushState({}, '', '/')

      return this.handle()
    }
  }

  handle() {
    const { pathname } = window.location // com o uso do Destructuring estou buscando por "pathname" e salvando em uma variavel
    const route = this.routes[pathname] || this.routes[404]
    this.navSelected()
  
   fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector("#app").innerHTML = html
    })
  }