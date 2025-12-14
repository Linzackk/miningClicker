export function carregarDanoPorClick() {
    if (localStorage.getItem("danoPorClick") !== null) {
        return Number(localStorage.danoPorClick)
    }
    return 1
}

export function carregarDinheiro() {
    if (localStorage.getItem("dinheiro") !== null) {
        return Number(localStorage.dinheiro)
    }
    return 0 
}

export function carregarDanoPorSegundo() {
    if (localStorage.getItem("danoPorSegundo") !== null) {
        return Number(localStorage.danoPorSegundo)
    }
    return 0
}
