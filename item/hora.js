var agora = new Date()
var hora = agora.getHours()
var MIN = new Date()
var min = MIN.getMinutes()

var por = window.document.getElementById('hora')
    por.innerHTML= `${hora}:${min}`
    
var temp = window.document.getElementById('tempo')
var boa = window.document.getElementById('boa')

// horario do var 

if ( hora < 5){
    boa.innerText = 'está de madrugada'
    boa.style.fontSize = '2em'
    document.body.style.backgroundImage = "linear-gradient(to top, #0D0D0D,#404040,#8C8C8C"
    temp.src = '/item/img/madrugada.jpg'
    
} else if (hora  < 12) {
    boa.innerText = 'bom dia'
    temp.src = '/item/img/dia.jpg'

} else if ( hora  < 18) {
    boa.innerText = 'boa tarde'
    document.body.style.backgroundImage = "linear-gradient(to top, #A65437,#F2935C,#D9C6BA"
    temp.src = '/item/img/tarde.jpg'
}else if (hora  < 23){
    boa.innerText = 'boa noite'
    document.body.style.backgroundImage = "linear-gradient(to top, #0D0D0D,#0B1426,#1F598C"
    temp.src = '/item/img/noite.jpg'
}
// horario do input
var enviar = document.getElementById('mud-hora2')
    enviar.addEventListener('click', somar)

function somar() { 

    var inph = document.getElementById('mud-hora')
    var inpm = document.getElementById('mud-hora1')
    var n1 = Number(inph.value)
    var n2 = Number(inpm.value)
        por.innerHTML= `${n1}:${n2}`

    if ( n1 < 5){
        boa.innerText = 'está de madrugada'
        boa.style.fontSize = '2em'
        document.body.style.backgroundImage = "linear-gradient(to top, #0D0D0D,#404040,#8C8C8C"
        temp.src = 'item/img/madrugada.jpg'    
    }
     else if (n1  < 12) {
        boa.innerText = 'bom dia'
        temp.src = 'item/img/dia.jpg'
        document.body.style.backgroundImage = "linear-gradient(to bottom,#0ecfff,#16d3aa, #368f1f)"
    }
     else if ( n1  < 18) {
        boa.innerText = 'boa tarde'
        document.body.style.backgroundImage = "linear-gradient(to top, #A65437,#F2935C,#D9C6BA"
        temp.src = 'item/img/tarde.jpg'
    }
    else if (n1  < 23){
        boa.innerText = 'boa noite'
        document.body.style.backgroundImage = "linear-gradient(to top, #0D0D0D,#0B1426,#1F598C"
        temp.src = 'item/img/noite.jpg'
    }
}
