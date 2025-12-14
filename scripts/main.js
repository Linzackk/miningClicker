import { mineriosDesbloqueados } from "./minerios/mineriosDesbloqueados.js"

let danoPorClick = 50;

const botaoMinerar = document.getElementById("btnMinerar");
botaoMinerar.addEventListener("click", minerar)

let vidaTotalMinerio = 0
let vidaAtualMinerio = 0
let nomeMinerio = ""

let vidaAtualMinerioHTML = document.getElementById('minerioVidaAtual')
let vidaTotalMinerioHTML = document.getElementById('minerioVidaTotal')
let nomeMinerioHTML = document.getElementById('minerioNome')
let imagemMinerioHTML = document.getElementById('imagemMinerio')

gerarNovoMinerio(1)

function minerar() {
    atualizarVidaMinerio()
    if (verificarMinerioDestruido()) {
        console.log("Gerando novo minério")
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
    let novoMinerio = escolherMinerio(id)

    nomeMinerio = mineriosDesbloqueados[novoMinerio]["nome"]
    nomeMinerioHTML.textContent = nomeMinerio

    vidaAtualMinerio = mineriosDesbloqueados[novoMinerio]["vidaTotal"]
    vidaAtualMinerioHTML.textContent = vidaAtualMinerio
    vidaTotalMinerio = vidaAtualMinerio
    vidaTotalMinerioHTML.textContent = vidaAtualMinerio

    let caminhoImagem = `imagens/minerios/${mineriosDesbloqueados[novoMinerio]["img"]}.webp`
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
