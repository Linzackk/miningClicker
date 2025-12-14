import { danoPorClick, atualizarDinheiro } from "../main.js"
import { mineriosDesbloqueados } from "../minerios/mineriosDesbloqueados.js"

export let minerioIdSpawnado = 1

let vidaTotalMinerio = 0
let vidaAtualMinerio = 0
let nomeMinerio = ""

let vidaAtualMinerioHTML = document.getElementById('minerioVidaAtual')
let vidaTotalMinerioHTML = document.getElementById('minerioVidaTotal')
let nomeMinerioHTML = document.getElementById('minerioNome')
let imagemMinerioHTML = document.getElementById('imagemMinerio')

export function minerar() {
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

export function gerarNovoMinerio(id = 0) {
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