/*const ListaClientes = () => {
  return fetch ("http://localhost:3000/profile")
  .then (resposta=> {
    return resposta.json()
  })
}

ListaClientes().then (data =>{
 //Transforma a API em um Objeto//  //Recebe a array da API//
data.forEach(elemento => {
tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
})})*/

// Conexao da API com JS
const listaClientes = ()=> {
    return fetch (`http://localhost:3000/profile`)
    .then (resposta => {
      return resposta.json()
    })
}

const criaCliente = (nome, email) => { 
  return fetch(`http://localhost:3000/profile`, {
      method: 'POST', 
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          nome: nome,
          email: email
      })
  })
  .then( resposta => {
      return resposta.body
  })
}

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
  method: 'DELETE'
  })
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente
}
/*
fetch("http://localhost:3000/profile").then((response) => response.json()).then((json) => json.forEach(usuario =>{
  tabela.appendChild(criaNovaLinha(usuario.nome, usuario.email))
}))*/

/*
{
  // FORMA COM PROMISE E REQUEST
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest()
//Abri a requisiçao API//
  http.open("GET", "http://localhost:3000/profile")
//Carrega a API//
  http.onload = () => {
      if ( http.status >= 400) {
        reject(JSON.parse(http.response))
      } else {
        resolve(JSON.parse(http.response))
      }
  */   
    //FORMA ANTIGA DE SINCRONIZAR DiVERSAS APIS
        /*
    const http2 = new XMLHttpRequest()
    http2.open("GET", "http://localhost:3000/profile/semanaPassada")
    http2.onload = () => {
      const http3 = new XMLHttpRequest()
      http3.open("GET", "http://localhost:3000/profile/semanaRetrasada")
      http3.onload = () => {  
      */
  

  //Envia a requisiçao API//
 /*
   http.send()
  })
  return promise
} 
*/