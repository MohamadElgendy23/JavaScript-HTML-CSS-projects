//represents the fighting game view as a canvas
export default function fightingGameView() {
  const gameCanvas = document.querySelector("canvas"); //the game canvas
  const gameContext = gameCanvas.getContext("2d"); //the canvas context

  //initialize the game. uses event listener for the window resize event
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

  // Display custom canvas.
  const redrawCanvas = () => {
    gameContext.fillStyle = "Black";
    gameContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
  };

  initialize();
}
