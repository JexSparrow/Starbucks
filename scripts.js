const copo = document.querySelector('.copo')
const circulo = document.querySelector('.circulo')
const itemsMenu = document.querySelector('.item-menu-opcoes')
const botaoCompra = document.querySelector('.botao-compra')
const starbucks = document.querySelector('span')
const body = document.querySelector('body')

function trocarCor(cor) {

    if (window.innerWidth <= 710) {
        circulo.style.background = cor
        botaoCompra.style.background = cor
        botaoCompra.style.color = "white"
        starbucks.style.color = cor
        body.style.borderColor = cor
        body.style.backgroundImage = `linear-gradient(to bottom, white, ${cor})`;

    } else {

        circulo.style.background = cor
        botaoCompra.style.background = cor
        botaoCompra.style.color = "white"
        starbucks.style.color = cor
        body.style.borderColor = cor

    }
}

function trocarCopo(endereco) {

    copo.src = endereco

}

















