import { minerios } from "./minerios.js"

let danoPorClick = 1;

const botaoMinerar = document.getElementById("btnMinerar");
botaoMinerar.addEventListener("click", minerar)

let vidaTotalMinerio = 0
let vidaAtualMinerio = 0
let nomeMinerio = ""

let vidaAtualMinerioHTML = document.getElementById('minerioVidaAtual')
let vidaTotalMinerioHTML = document.getElementById('minerioVidaTotal')
let nomeMinerioHTML = document.getElementById('minerioNome')
let imagemMinerioHTML = document.getElementById('imagemMinerio')

gerarNovoMinerio()

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

function gerarNovoMinerio() {
    let novoMinerio = escolherMinerio()

    nomeMinerio = minerios[novoMinerio]["nome"]
    nomeMinerioHTML.textContent = nomeMinerio

    vidaAtualMinerio = minerios[novoMinerio]["vidaTotal"]
    vidaAtualMinerioHTML.textContent = vidaAtualMinerio
    vidaTotalMinerio = vidaAtualMinerio
    vidaTotalMinerioHTML.textContent = vidaAtualMinerio
}

function escolherMinerio() {
    return Math.floor(Math.random() * (
        Object.keys(minerios).length) + 1
    )
}
