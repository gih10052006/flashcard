<script src="app.js"></script>
<script src="perguntas.js"></script>
function criaCartao (categoria, pergunta, resposta) {

}
function criaCartao (categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)
}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
}function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
}let respostaEstaVisivel = false
function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
}
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}cartao.addEventListener('click', viraCartao)