import { mineriosDesbloqueados } from "../minerios/mineriosDesbloqueados.js"

export let minerioIdSpawnado = 1

export let vidaTotalMinerio = 0
export let vidaAtualMinerio = 0
export let nomeMinerio = ""

export let vidaAtualMinerioHTML = document.getElementById('minerioVidaAtual')
export let vidaTotalMinerioHTML = document.getElementById('minerioVidaTotal')
export let nomeMinerioHTML = document.getElementById('minerioNome')
export let imagemMinerioHTML = document.getElementById('imagemMinerio')

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