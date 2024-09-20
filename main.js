const celulas = document.querySelectorAll(".celula");

let turnoBola = false;

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function checagemVitoria(jogadorAtual) {
    return combinacoesVitoria.some((combinacoes) => {
        console.log(combinacoes);
        return combinacoes.every(index => {
            return celulas[index].classList.contains(jogadorAtual);
        })
    })
}

function iniciarJogo() {
    for (const celula of celulas) {
        celula.addEventListener("click", joga, { once: true });
    }
}

function finalizarJogo(jogador) {
    const mensagemVitoriaDiv = document.querySelector(".mensagem-vencedor")
    const mensagemVitoriaCampo = mensagemVitoriaDiv.querySelector("p");

    mensagemVitoriaCampo.innerText = jogador + " ganhou!"
    mensagemVitoriaDiv.classList.add("mostrar-mensagem-vitoria")
}

function joga(e) {
    const celula = e.target;
    const classAAdicionar = turnoBola ? "bola" : "x";

    celula.classList.add(classAAdicionar);

    turnoBola = !turnoBola

    if (checagemVitoria(classAAdicionar)) {
        finalizarJogo(classAAdicionar);
    }
}

iniciarJogo();