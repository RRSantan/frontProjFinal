function exibirProdutos(produtos) {
    const listaProdutos = document.getElementById('produtos-lista');
    listaProdutos.innerHTML = ''; // Limpa a lista de produtos

    produtos.forEach(produto => {
        const produtoElemento = document.createElement('div');
        produtoElemento.classList.add('card', 'mt-3');
        produtoElemento.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${produto.name}</h5>
                <p class="card-text">${produto.descricao}</p>
                <p class="card-text">Quantidade: ${produto.quantidade}</p>
                <p class="card-text">Valor: R$ ${produto.value.toFixed(2)}</p>
            </div>
        `;
        listaProdutos.appendChild(produtoElemento);
    });
}

function obterProdutos() {
    fetch('http://localhost:8080/produto')
        .then(response => response.json())
        .then(data => {
            exibirProdutos(data);
        })
        .catch(error => console.error('Erro ao obter os dados da API:', error));
}

// Chama a função para obter os produtos inicialmente
obterProdutos();

// Atualiza os produtos a cada 5 segundos
setInterval(obterProdutos, 5000);
