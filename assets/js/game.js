const canvas = document.querySelector('#game')

// canvas.getContext('2d') para obtener el contexto para un juego en 2d
const game = canvas.getContext('2d')

// Ejecutar la funcion startGame despues de haber cargado el html, el window
window.addEventListener('load', startGame)

function startGame(){

    let canvasSize;

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

   const elementsSize = canvasSize / 10;

   game.font = elementsSize + 'px Verdana'
   game.textAlign = 'end';

   for (let i = 1; i <= 10; i++) {
       game.fillText(emojis['X'], elementsSize * i, elementsSize)
   }

}