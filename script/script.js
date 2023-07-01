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
    var svgParent = document.getElementById('SVG_Object')
    let svgDoc = svgParent.contentDocument
    let svgElement = svgDoc.getElementById('elementoSVG')
});

let todosPortifolios = document.querySelectorAll('.portifolio')

todosPortifolios.forEach((n)=>{
    let h2 = n.querySelector('.titulo-projeto')

    n.addEventListener('mouseenter',()=>{
        n.style.background = "rgba(121,30,88, 0.1)"
        n.style.cursor = "pointer"
        h2.style.color = 'rgb(94 234 212)'
    })

    n.addEventListener('mouseleave',()=>{
        n.style.background = '#0D1024'
        h2.style.color = '#fff'
    })
})