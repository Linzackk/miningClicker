import { mineriosDesbloqueados } from "./minerios/mineriosDesbloqueados.js"

let danoPorClick = 1;

const botaoMinerar = document.getElementById("btnMinerar");
botaoMinerar.addEventListener("click", minerar)

let minerioIdSpawnado = 1

let dinheiro = 0
let vidaTotalMinerio = 0
let vidaAtualMinerio = 0
let nomeMinerio = ""

let dinheiroHTML = document.getElementById('dinheiro')
let vidaAtualMinerioHTML = document.getElementById('minerioVidaAtual')
let vidaTotalMinerioHTML = document.getElementById('minerioVidaTotal')
let nomeMinerioHTML = document.getElementById('minerioNome')
let imagemMinerioHTML = document.getElementById('imagemMinerio')

gerarNovoMinerio(1)

function minerar() {
    atualizarVidaMinerio()
    if (verificarMinerioDestruido()) {
        atualizarDinheiro()
        gerarNovoMinerio()
    }
}

function atualizarVidaMinerio() {
    vidaAtualMinerio -= danoPorClick
    vidaAtualMinerioHTML.textContent = vidaAtualMinerio
}

function verificarMinerioDestruido() {
    if (vidaAtualMinerio <= 0) {
        return true
    }
    return false
}

function gerarNovoMinerio(id = 0) {
    minerioIdSpawnado = escolherMinerio(id)

    nomeMinerio = mineriosDesbloqueados[minerioIdSpawnado]["nome"]
    nomeMinerioHTML.textContent = nomeMinerio

    vidaAtualMinerio = mineriosDesbloqueados[minerioIdSpawnado]["vidaTotal"]
    vidaAtualMinerioHTML.textContent = vidaAtualMinerio
    vidaTotalMinerio = vidaAtualMinerio
    vidaTotalMinerioHTML.textContent = vidaAtualMinerio

    let caminhoImagem = `imagens/minerios/${mineriosDesbloqueados[minerioIdSpawnado]["img"]}.webp`
    imagemMinerioHTML.setAttribute("src", caminhoImagem)
}

function escolherMinerio(id = 0) {
    if (id === 0) {
        return Math.floor(Math.random() * (
            Object.keys(mineriosDesbloqueados).length) + 1
        )
    }
    return id
}

function atualizarDinheiro() {
    dinheiro += mineriosDesbloqueados[minerioIdSpawnado]["dinheiro"]
    dinheiroHTML.textContent = dinheiro
}