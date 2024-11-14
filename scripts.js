const copo = document.querySelector('.copo')
const circulo = document.querySelector('.circulo')
const itemsMenu = document.querySelector('.item-menu-opcoes')
const botaoCompra = document.querySelector('.botao-compra')
const starbucks = document.querySelector('span')
const body = document.querySelector('body')

console.log(starbucks)

function trocarCor(cor){
    
    circulo.style.background = cor
    botaoCompra.style.background = cor
    botaoCompra.style.color = "white"
    starbucks.style.color = cor
    body.style.borderColor = cor
}

function trocarCopo(endereco){

    copo.src = endereco
    
}

















