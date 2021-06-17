    //TEMPLATE QUE RECEBE DADO E GERA UMA VISUALIZAÇAO NO HTML

    import{clienteService} from "../service/cliente-service.js"
  const criaNovaLinha = (nome, email, id) => {
    //Criaçao da linha// 
    const linhaNovoCliente = document.createElement("tr")
  
    // Conteudo da linha// 
    const conteudo = `
      <td class="td" data-td>${nome}</td>
      <td>${email}</td>
      <td>
          <ul class="tabela__botoes-controle">
              <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
              <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
          </ul>
      </td>
   `
    //Inserir o conteudo da linha no html//
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    console.log(linhaNovoCliente);
    return linhaNovoCliente
  }

    //Selecionar a tabela//
const tabela = document.querySelector("[data-tabela]")
tabela.addEventListener('click',  async (evento)=>{
  let ehBotaoDeletar = evento.target.className ===  'botao-simples botao-simples--excluir'
  if(ehBotaoDeletar) {
    try {
    const linhaCliente = evento.target.closest('[data-id]')
    let id = linhaCliente.dataset.id
    await clienteService.removeCliente(id)
      linhaCliente.remove()
    } catch(erro) {
      
      window.location.href = "../telas/erro.html"
    }
  }
})
// Mostrar os Clientes na tela
const render = async () => {
  try {
  const listaClientes = await clienteService.listaClientes()
    listaClientes.forEach(elemento =>{
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
    })
  } catch (erro) {
    window.location.href = '../telas/erro.html'
  }
}
render ()