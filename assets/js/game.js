const canvas = document.querySelector('#game')

// canvas.getContext('2d') para obtener el contexto para un juego en 2d
const game = canvas.getContext('2d')

// Ejecutar la funcion startGame despues de haber cargado el html, el window
window.addEventListener('load', startGame)

function startGame(){

    /*
    Para las coordenadas las 2 primeras son para indicar donde es que van a empezar, el primer 0 es para el eje X(horizontal), y(vertical), y las siguientes 2 coordenadas son para el ancho y alto de la figura
    */
    // game.fillRect(0,0,100,100)
    // game.clearRect(50,10,50,50)

    /*
    .fillText recibe el texto, el eje X y Y, con 
    .fillAlign = 'center' lo centra a partir de la 
    coordenada X y desde ahi lo centra
    */
   
   game.font = '25px Verdana'
   game.fillStyle = "purple"
   game.textAlign = 'center'
   game.fillText("Platzi", 40, 30)

}