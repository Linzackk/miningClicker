import { gerarNovoMinerio, vidaAtualMinerio, vidaAtualMinerioHTML } from "./gerarMinerio.js"
import { dinheiro, dinheiroHTML } from "../main.js"

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

function atualizarDinheiro() {
    dinheiro += mineriosDesbloqueados[minerioIdSpawnado]["dinheiro"]
    dinheiroHTML.textContent = dinheiro
}

function verificarMinerioDestruido() {
    if (vidaAtualMinerio <= 0) {
        return true
    }
    return false
}
