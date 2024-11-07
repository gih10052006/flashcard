.cartao:hover .cartao__conteudo {
    transform: rotateY(180deg);
}
.cartao__conteudo {
    background-color: var(--card-front-color);
    text-align: center;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms ease-in-out;
}
.cartao__conteudo h3 {
    color: var(--text-color);
    border: 1px solid var(--text-color);
    text-align: left;
    padding: 0.5rem;
    position: absolute;
    margin: 0.6rem;
    border-radius: 0.6rem;
    font-size: 1vw;
    backface-visibility: hidden;
}
.cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    backface-visibility: hidden;
}
.cartao__conteudo__resposta {
    transform: rotateY(180deg);
}
.cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    backface-visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}
.cartao__conteudo p {
    margin-top: 1rem;
    padding: 2rem;
    margin-top: 4rem;
}
criaCartao(
    categoria,
    pergunta,
    resposta
)
criaCartao(
    categoria,
    pergunta,
    resposta
)

criaCartao(
    categoria,
    pergunta,
    resposta
)

criaCartao(
    categoria,
    pergunta,
    resposta
)
criaCartao(
    'Programação',
    'O que é Python?',
    'O Python é uma linguagem de programação'
)

criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)
criaCartao(
    'Lingua inglesa',
    'Como se diz OI em inglês?',
    'Oi em ingles é HI (RAI)'
) 
let respostaEstaVisivel = false
function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
}
