const gameCanvas = document.querySelector("canvas"); //the game canvas
const gameCanvasContext = gameCanvas.getContext("2d"); //the canvas context used to draw things on the canvas
//represents the movable items (characters) in the game => characters = player and enemy
class Sprite {
  constructor({ position, velocity, width, height }) {
    this.position = position;
    this.velocity = velocity;
    this.width = width;
    this.height = height;
    this.gravity = 0.2;
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

  //update the sprites in the canvas (used in the update loop)
  update() {
    this.draw();
    this.position.x += this.velocity.x; //move left/right at specific velocity
    this.position.y += this.velocity.y; //move up/down at specifc velocity
    //let sprite stop when it hits floor
    if (this.position.y + this.height + this.velocity.y >= gameCanvas.height) {
      this.velocity.y = 0; //stop!
    } else {
      //add gravity to make no gap between bottom of sprite and bottom of canvas when hits the floor
      this.velocity.y += this.gravity;
    }
  }
}

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

//player
const player = new Sprite({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
  width: 100,
  height: 150,
});

//enemy
const enemy = new Sprite({
  position: { x: 600, y: 150 },
  velocity: { x: 0, y: 0 },
  width: 100,
  height: 400,
});

//runs animation frame infinitely (or duration of the game). used as update loop.
function animate() {
  window.requestAnimationFrame(animate);
  gameCanvasContext.fillStyle = "Black";
  gameCanvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height); //differentiate between red sprite and black background
  player.update();
  enemy.update();
}

animate();

//contains logic for the player sprite movement. utilizes event listeners
function playerMovementLogic() {
  //add event listeners for the keydown event (move the player)
  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "w":
        player.velocity.y = -1;
        break;
      case "a":
        player.velocity.x = -1;
        break;
      case "d":
        player.velocity.x = 1;
        break;
      case "s":
        player.velocity.y = 1;
        break;
    }
  });

  //add event listeners for the keyup event (stop the player)
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "w":
        player.velocity.y = 0;
        break;
      case "a":
        player.velocity.x = 0;
        break;
      case "d":
        player.velocity.x = 0;
        break;
      case "s":
        player.velocity.y = 0;
        break;
    }
  });
}

function enemyMovementLogic() {
  //add event listeners for the keydown event (move the enemy)
  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        enemy.velocity.y = -1;
        break;
      case "ArrowLeft":
        enemy.velocity.x = -1;
        break;
      case "ArrowRight":
        enemy.velocity.x = 1;
        break;
      case "ArrowDown":
        enemy.velocity.y = 1;
        break;
    }
  });

  //add event listeners for the keyup event (stop the enemy)
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowUp":
        enemy.velocity.y = 0;
        break;
      case "ArrowLeft":
        enemy.velocity.x = 0;
        break;
      case "ArrowRight":
        enemy.velocity.x = 0;
        break;
      case "ArrowDown":
        enemy.velocity.y = 0;
        break;
    }
  });
}

playerMovementLogic();
enemyMovementLogic();
