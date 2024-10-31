index.html
<script src="app.js"></script>
<script src="perguntas.js"></script>
function criaCartao (categoria, pergunta, resposta) {console.log categoria, pergunta, resposta}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
        cartao.className = 'cartao'
}
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>Programação</h3>
<div class="cartao__conteudo__pergunta">
        <p>O que é JavaScript?</p>
</div>
<div class="cartao__conteudo__resposta">
        <p>O JavaScript é uma linguagem de programação</p>
</div>
</div>
`container.appendChild(cartao)
<!-- <article class="cartao">
<div class="cartao__conteudo">
        <h3>Programação</h3>
        <div class="cartao__conteudo__pergunta">
                <p>O que é JavaScript?</p>
        </div>
        <div class="cartao__conteudo__resposta">
                <p>O JavaScript é uma linguagem de programação</p>
        </div>
</div>
</article> -->
cartao.innerHTML = `
        <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
        </div>
        </div>
`