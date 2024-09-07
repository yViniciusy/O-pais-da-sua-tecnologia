function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
       section.innerHTML = "<p>Busca não encontrada. Você precisa digitar o nome de um pais</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)) {
            // cria um novo elemento
            resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2> 
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Informações da tecnologia dos EUA, e do mundo</a>
            </div>
        `;
        }      
        
        
    }

    if (!resultado) {
        resultado = "<p>Busca não encontrada</p>"
    }

    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultado;
}