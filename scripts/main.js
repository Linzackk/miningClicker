import { gerarNovoMinerio, minerar, minerioIdSpawnado } from "./base/minerar.js"
import { salvar } from "./informacoes/salvarInformacoes.js";
import { carregarDanoPorClick, carregarDinheiro, carregarDanoPorSegundo } from "./informacoes/carregarInformacoes.js"
import { mineriosDesbloqueados } from "./minerios/mineriosDesbloqueados.js";

export let danoPorClick = carregarDanoPorClick()
danoPorClick = 1

let danoPorSegundo = carregarDanoPorSegundo()
let danoPorSegundoHTML = document.getElementById('dpsValor')
danoPorSegundoHTML.textContent = danoPorSegundo

const botaoMinerar = document.getElementById("btnMinerar");
botaoMinerar.addEventListener("click", minerar)

export let dinheiro = carregarDinheiro()
export let dinheiroHTML = document.getElementById('dinheiroValor')
dinheiroHTML.textContent = dinheiro

gerarNovoMinerio(1)

let tempoTotal = 0

export function atualizarDinheiro() {
    dinheiro += mineriosDesbloqueados[minerioIdSpawnado]["dinheiro"]
    dinheiroHTML.textContent = dinheiro
}

function main() {
    setTimeout(() => {
        if (tempoTotal % 60 === 0) {
            salvar(danoPorClick, dinheiro, danoPorSegundo)
        }
        tempoTotal += 1
        main()
    }, 1000);
}

main()