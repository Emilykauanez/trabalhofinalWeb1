document.getElementById("frete-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let cep = document.getElementById("cep").value.trim();
    let valorCompra = parseFloat(document.getElementById("valor-compra").value);
    let resultado = document.getElementById("resultado");

    // Condição 1: Frete grátis para compras acima de R$ 199,90
    if (valorCompra >= 199.90) {
        resultado.innerText = "Frete Grátis! Sua compra é acima de R$ 199,90.";
        resultado.style.color = "green";
        return;
    }

    // Condição 2: Frete grátis para o CEP 65620000
    if (cep === "65620000") {
        resultado.innerText = "Frete Grátis! Entrega local para o CEP 65620000.";
        resultado.style.color = "green";
        return;
    }

    // Frete fixo de R$ 67,90 para qualquer outro caso
    resultado.innerText = "Você não atingiu o valor minímo da compra! Valor do frete: R$ 67,90";
    resultado.style.color = "red";
});
