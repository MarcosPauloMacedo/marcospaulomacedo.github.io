let texto = document.querySelector('.texto-interativo')

nome = 'Web developer'
numero = 0

setInterval(function(){
    if(numero <= nome.length){
        let parte = nome.substring(0,numero)
        texto.innerHTML = parte
        texto.classList.add('test')
        numero++
    }
},100)

window.addEventListener('load', function() {
    var svgParent = document.getElementById('elementoSVG');
    svgParent.classList.add('active');
});

if(numero <= numero.length){
    console
}
