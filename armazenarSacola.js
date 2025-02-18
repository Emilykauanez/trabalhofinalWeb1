function adicionarProduto(nome, preco, quantidade) {
    let sacola = JSON.parse(localStorage.getItem("sacola")) || [];

    let produto = {
        nome: nome,
        preco: parseFloat(preco), // armazenar preço
        quantidade: parseInt(quantidade) || 1 // Garantindo que a quantidade seja um número
    };

    sacola.push(produto);
    localStorage.setItem("sacola", JSON.stringify(sacola));

    console.log("Produto adicionado à sacola:", produto);
    console.log("Sacola atualizada:", sacola);
}

function carregarSacola() {
    let sacola = JSON.parse(localStorage.getItem("sacola")) || []; // Recupera os produtos
    let tabelaSacola = document.getElementById("sacola-itens"); // Pega a tabela onde os itens serão exibidos

    if (!tabelaSacola) {
        console.error("Elemento #sacola-itens não encontrado!");
        return;
    }

    tabelaSacola.innerHTML = ""; // Limpa a tabela antes de adicionar os produtos

    sacola.forEach((produto, index) => {
        let linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td><button onclick="removerItem(${index})">Remover</button></td>
        `;
        tabelaSacola.appendChild(linha);
    });

    console.log("Sacola carregada com sucesso:", sacola);
}


document.addEventListener("DOMContentLoaded", function () {
    let botoes = document.querySelectorAll(".adicionar-sacola");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            let nome = this.getAttribute("data-nome");
            let preco = parseFloat(this.getAttribute("data-preco"));
            let quantidade = parseInt(this.parentNode.querySelector("input").value);

            adicionarProduto(nome, preco, quantidade);
        });
    });
});
