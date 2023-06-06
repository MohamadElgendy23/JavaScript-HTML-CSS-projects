const gameCanvas = document.querySelector("canvas"); //the game canvas
const gameCanvasContext = gameCanvas.getContext("2d"); //the canvas context used to draw things on the canvas
//creates the game canvas that will display the fighting game
function createGameCanvas() {
  //NOTE: not using css here because with canvas dimensions it wasnt correct
  gameCanvas.width = 1500;
  gameCanvas.height = 900;

  //background is black
  gameCanvasContext.fillStyle = "Black";
  gameCanvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
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
    if (this.position.y + this.height >= gameCanvas.height) {
      this.velocity.y = 0; //stop!
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
