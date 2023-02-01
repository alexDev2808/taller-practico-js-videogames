const canvas = document.querySelector('#game')

// canvas.getContext('2d') para obtener el contexto para un juego en 2d
const game = canvas.getContext('2d')

let canvasSize;
let elementsSize;

// Ejecutar la funcion startGame despues de haber cargado el html, el window
window.addEventListener('load', setCanvasSize);

// Escuchar cada vez que se haga resize
window.addEventListener('resize', setCanvasSize);

/*
Aqui se ejecuta primero setCanvasSize y dentro de setCanvasSize tambien se llama startGame(), ya que si no se hace, el render de los elementos no se ejecutara
*/

function setCanvasSize(){

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

   elementsSize = canvasSize / 10;

   startGame()
}

function startGame(){

   game.font = elementsSize + 'px Verdana'
   game.textAlign = 'end';

   for (let i = 1; i <= 10; i++) {
       game.fillText(emojis['X'], elementsSize * i, elementsSize)
   }

}