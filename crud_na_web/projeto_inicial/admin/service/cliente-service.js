    //TEMPLATE QUE RECEBE DADO E GERA UMA VISUALIZAÇAO NO HTML

const criaNovaLinha = (nome, email) => {
  //Criaçao da linha// 
  const linhaNovoCliente = document.createElement("tr")

  // Conteudo da linha// 
  const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
 `
  //Inserir o conteudo da linha no html//
  linhaNovoCliente.innerHTML = conteudo
  return linhaNovoCliente
}
//Selecionar a tabela//
const tabela = document.querySelector("[data-tabela]")

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
async function teste(){
  const url = 'http://localhost:3000/profile'
  const fetch1 = await fetch(`${url}`)
  const resposta = await fetch1.json()
 const resultado = await  resposta.forEach(element => {
     tabela.appendChild(criaNovaLinha(element.nome, element.email))
   });
  return resultado
} 
teste()
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
    //FORMA ANTIGA DE SINCRONIZAR DOVERSAS APIS
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
