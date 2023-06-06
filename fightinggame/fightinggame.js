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
    gameCanvas.width = 1024; //not using css here because with canvas dimensions it wasnt correct
    gameCanvas.height = 576;
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
  constructor({ position, velocity, width, height }) {
    this.position = position;
    this.velocity = velocity;
    this.width = width;
    this.height = height;
  }

  //draw the sprite at this.position on the canvas
  draw() {
    gameCanvasContext.fillStyle = "Red";
    gameCanvasContext.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y; //move downward at specifc velocity
    //let sprite stop when it hits floor
    if (this.position.y + this.height === 824) {
      this.velocity.y = 0;
    }
  }
}

const player = new Sprite({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 5 },
  width: 100,
  height: 150,
});

const enemy = new Sprite({
  position: { x: 600, y: 150 },
  velocity: { x: 0, y: 5 },
  width: 100,
  height: 400,
});

//runs animation frame infinitely. used as update loop.
function animate() {
  window.requestAnimationFrame(animate);
  gameCanvasContext.fillStyle = "Black";
  gameCanvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height); //differentiate between red sprite and black background
  player.update();
  enemy.update();
}

animate();
