const celulas = document.querySelectorAll(".celula");
const mensagemVitoriaDiv = document.querySelector(".mensagem-vencedor");
const botaoReiniciar = mensagemVitoriaDiv.querySelector("button");

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
    return combinacoesVitoria.some(combinacoes => {
        return combinacoes.every(index => {
            return celulas[index].classList.contains(jogadorAtual);
        })
    });
}

function checagemEmpate() {
    return [...celulas].every(celula => {
        return celula.classList.contains("x") || celula.classList.contains("bola");
    });
}

function iniciarJogo() {
    for (const celula of celulas) {
        celula.classList.remove("bola");
        celula.classList.remove("x");
        celula.removeEventListener("click", joga);
        celula.addEventListener("click", joga, { once: true });
    }

    mensagemVitoriaDiv.classList.add("none");
}

function finalizarJogo(mensagem) {
    const mensagemVitoriaCampo = mensagemVitoriaDiv.querySelector("p");

    mensagemVitoriaCampo.innerText = mensagem;
    mensagemVitoriaDiv.classList.remove("none");
}

function joga(e) {
    const celula = e.target;
    const classAAdicionar = turnoBola ? "bola" : "x";

    celula.classList.add(classAAdicionar);

    turnoBola = !turnoBola;

    if (checagemVitoria(classAAdicionar)) {
        finalizarJogo(classAAdicionar.toUpperCase() + " GANHOU!");
    } else if (checagemEmpate()) {
        finalizarJogo("EMPATE!")
    }
}

iniciarJogo();
botaoReiniciar.addEventListener("click", iniciarJogo);