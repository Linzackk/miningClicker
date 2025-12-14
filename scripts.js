let danoPorClick = 1;

const ferro = {
    id: 0,
    nome: "Ferro",
    "vidaTotal": 5
}
let vidaTotalMinerio = ferro["vidaTotal"];
let vidaAtualMinerio = ferro["vidaTotal"];

let vidaAtualMinerioHTML = document.querySelector('#minerioVidaAtual')
let vidaTotalMinerioHTML = document.querySelector('#minerioVidaTotal')

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
    vidaAtualMinerio = ferro["vidaTotal"]
    vidaTotalMinerio = ferro["vidaTotal"]
    vidaAtualMinerioHTML.textContent = ferro["vidaTotal"]
    vidaTotalMinerioHTML.textContent = ferro["vidaTotal"]
}