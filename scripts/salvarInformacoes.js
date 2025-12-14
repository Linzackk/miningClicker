function salvardanoPorClick(danoPorClick) {
    localStorage.danoPorClick = danoPorClick;
}

function salvarDinheiro(dinheiro) {
    localStorage.dinheiro = dinheiro;
}

export function salvar(danoPorClick, dinheiro) {
    salvardanoPorClick(danoPorClick)
    salvarDinheiro(dinheiro)
}