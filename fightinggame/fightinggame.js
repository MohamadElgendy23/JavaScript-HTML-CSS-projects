const gameCanvas = document.querySelector("canvas"); //the game canvas
const gameCanvasContext = gameCanvas.getContext("2d"); //the canvas context used to draw things on the canvas

//creates the game canvas that will display the fighting game
function createGameCanvas() {
  function initialize() {
    // Register an event listener to call the resizeCanvas() function
    // each time the window is resized.
    window.addEventListener("resize", resizeCanvas, false);
    // Draw canvas for the first time.
    resizeCanvas();
  }
  // Runs each time the DOM window resize event fires.
  // Resets the canvas dimensions to match window dimensions and redraws.
  const resizeCanvas = () => {
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
    redrawCanvas();
  };

  // Display custom canvas
  const redrawCanvas = () => {
    gameCanvasContext.fillStyle = "Black";
    gameCanvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height); //start at top left of the canvas and fill up the whole canvas
  };

  initialize();
}
createGameCanvas(); //create!

//represents the movable items (characters) in the game => characters = player and enemy
class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
  }

  //draw the sprite at this.position on the canvas
  draw() {
    gameCanvasContext.fillStyle = "Red";
    gameCanvasContext.fillRect(this.position.x, this.position.y, 50, 150);
  }

  update() {
    this.draw();
    this.position.x += 5;
    this.position.y += 10;
  }
}

const player = new Sprite({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
});

const enemy = new Sprite({
  position: { x: 600, y: 150 },
  velocity: { x: 0, y: 0 },
});

//runs animation frame infinitely. used as update loop.
function animate() {
  window.requestAnimationFrame(animate);
  gameCanvasContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  gameCanvasContext.fillStyle = "Black";
  gameCanvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height); //start at top left of the canvas and fill up the whole canvas
  player.update();
  enemy.update();
}

animate();
