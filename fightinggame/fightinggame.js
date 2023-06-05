//creates the game canvas that will display the fighting game
function createGameCanvas() {
  const gameCanvas = document.querySelector("canvas"); //the game canvas
  const gameContext = gameCanvas.getContext("2d"); //the canvas context
  function initialize() {
    // Register an event listener to call the resizeCanvas() function
    // each time the window is resized.
    window.addEventListener("resize", resizeCanvas, false);
    // Draw canvas for the first time.
    resizeCanvas();
  }
  // Runs each time the DOM window resize event fires.
  // Resets the canvas dimensions to match window and redraws.
  const resizeCanvas = () => {
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
    redrawCanvas();
  };

  // Display custom canvas
  const redrawCanvas = () => {
    gameContext.fillStyle = "Black";
    gameContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height); //start at top left of the canvas and fill up the whole canvas
  };

  initialize();
}
createGameCanvas();

//represents the movable items (characters) in the game => characters = player and enemy
class Sprite {
  constructor(position) {
    this.positon = position;
  }
}

const player = new Sprite({ x: 0, y: 0 });

console.log(player);
