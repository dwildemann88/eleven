// Definição da estrutura de Projeto usando JavaScript
class Projeto {
    constructor(titulo, descricao, imagem, link) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.link = link;
    }
}

// Array de projetos
const projetos = [
    new Projeto(
        "Lista de Despesas",
        "Um projeto voltado para organização pessoal que visa melhor organização dos seus gastos.",
        "img/despesas.PNG",
        "https://lista-de-despesas-dw.netlify.app/"
    ),
    new Projeto(
        "Sistema de Estoque",
        "Um sistema voltado a organização de estoque, seus produtos são acrescidos ou decrescidos.",
        "img/estoque.PNG",
        "https://sistemadeestoquedw.great-site.net/"
    ),
    new Projeto(
        "Jogo Mata Mosquito",
        "Um jogo destinado a simples diversão, você consegue ganhar? Apenas parece fácil!",
        "img/mosquito.PNG",
        "https://mata-mosquito-game-dw.netlify.app/"
    )
    // Adicione mais projetos conforme necessário
];

// Função para exibir os projetos na página
function exibirProjetos() {
    const container = document.getElementById('projectsContainer');
    projetos.forEach(projeto => {
        const projectHTML = `
            <div class="project">
                <img src="${projeto.imagem}" alt="${projeto.titulo}">
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" class="btn-ver-mais">Visualizar Projeto</a>
            </div>
        `;
        container.innerHTML += projectHTML;
    });
}

// Chama a função para exibir os projetos ao carregar a página
document.addEventListener('DOMContentLoaded', exibirProjetos);
