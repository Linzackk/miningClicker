import { gerarNovoMinerio } from "./base/gerarMinerio.js"
import { salvar } from "./informacoes/salvarInformacoes.js";
import { carregarDanoPorClick, carregarDinheiro, carregarDanoPorSegundo } from "./informacoes/carregarInformacoes.js"
import { minerar } from "./base/minerar.js";

let danoPorClick = carregarDanoPorClick()

let danoPorSegundo = carregarDanoPorSegundo()
let danoPorSegundoHTML = document.getElementById('dpsValor')
danoPorSegundoHTML.textContent = danoPorSegundo

const botaoMinerar = document.getElementById("btnMinerar");
botaoMinerar.addEventListener("click", minerar)

export let dinheiro = carregarDinheiro()
export let dinheiroHTML = document.getElementById('dinheiroValor')
dinheiroHTML.textContent = dinheiro

let vidaTotalMinerio = 0
let vidaAtualMinerio = 0
let nomeMinerio = ""

let vidaAtualMinerioHTML = document.getElementById('minerioVidaAtual')
let vidaTotalMinerioHTML = document.getElementById('minerioVidaTotal')
let nomeMinerioHTML = document.getElementById('minerioNome')
let imagemMinerioHTML = document.getElementById('imagemMinerio')

gerarNovoMinerio(1)

let tempoTotal = 0

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