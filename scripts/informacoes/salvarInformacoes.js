function salvardanoPorClick(danoPorClick) {
    localStorage.danoPorClick = danoPorClick;
}

function salvarDinheiro(dinheiro) {
    localStorage.dinheiro = dinheiro;
}

function salvarDanoPorSegundo(danoPorSegundo) {
    localStorage.danoPorSegundo = danoPorSegundo
}

export function salvar(danoPorClick, dinheiro) {
    salvardanoPorClick(danoPorClick)
    salvarDinheiro(dinheiro)
}