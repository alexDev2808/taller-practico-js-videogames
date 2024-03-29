const canvas = document.querySelector('#game');

// canvas.getContext('2d') para obtener el contexto para un juego en 2d
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementsSize;

const playerPosition = {
   x: undefined,
   y: undefined
}

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

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

   elementsSize = canvasSize / 10;

   startGame()
}

function startGame(){

   game.font = elementsSize + 'px Verdana';
   game.textAlign = 'end';


//    Acceder al arreglo de mapas(strings)
   const map = maps[0];
//    Limpiar con trim() los espacios en blanco(Al inicio y final), despues dividirlo por saltos de linea .split(')
   const mapRows = map.trim().split("\n");
//    Utilizamos map para devolver un nuevo array limpiando los espacios en blanco de cada linea, y dividirlos por cada caracter
   const mapRowsCol = mapRows.map(row => row.trim().split(''));
   // console.log(mapRows);
   // console.log(mapRowsCol);

   mapRowsCol.forEach((row, rowI) => {
      row.forEach((col, colI) => {
         const emoji = emojis[col];
         const posX = elementsSize * (colI + 1);
         const posY = elementsSize * (rowI + 1);

         if(col == 'O'){
            playerPosition.x = posX;
            playerPosition.y = posY; 
            console.log(playerPosition)
         }

         game.fillText(emoji, posX, posY);
      })
   })

   movePlayer();
}

function movePlayer() {
   game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
   if (event.key == "ArrowUp") moveUp();
   else if(event.key == "ArrowLeft") moveLeft();
   else if(event.key == "ArrowRight") moveRight();
   else if(event.key == "ArrowDown") moveDown();
}

function moveUp() {
   console.log("Me quiero mover hacia arriba");
   playerPosition.y -= elementsSize;
   movePlayer();
}
function moveLeft() {
   console.log("Me quiero mover hacia la izquierda");
}
function moveRight() {
   console.log("Me quiero mover hacia la derecha");
}
function moveDown() {
   console.log("Me quiero mover hacia abajo");
}