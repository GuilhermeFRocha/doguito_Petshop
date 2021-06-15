    //TEMPLATE QUE RECEBE DADO E GERA UMA VISUALIZAÇAO NO HTML


    import{clienteService} from "../service/cliente-service.js"
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

// Mostrar os Clientes na tela
clienteService.listaClientes()
.then (data => {
    data.forEach(elemento =>{
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    })
})