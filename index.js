const colorSelected = document.querySelector('.input_color');
const buttonVisualizar = document.querySelector('.btn');
const h2 = document.querySelector('h2');
const box = document.getElementById('box')

buttonVisualizar.addEventListener('click',()=>{
    let codigorgb = colorSelected.value;
    h2.textContent = codigorgb;
    box.style.backgroundColor=codigorgb;
})