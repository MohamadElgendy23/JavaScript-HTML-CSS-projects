// the 3 players array. contains the info and image to be displayed on selection.
const playersArr = [
  {
    image:
      "https://nbc-2.com/wp-content/uploads/2020/07/hypat…1a8d275bcb-h_27f46f360593d4f3b292f98dc5e1db17.jpg",
    whoami:
      "I am Lebron James, an NBA champion who currently plays for the Los Angeles Lakers. I am also referred to as King James or the GOAT since I am arguably the best basketball player in the world.",
  },
  {
    image:
      "https://blacksportsonline.com/wp-content/uploads/2023/08/Kobe-Bryant-angry.jpg",
    whoami:
      "I am Stephen Curry, the 3 point master who before shooting a 3, better pray the ball is flat. I currently play for the Golden State Warriors and enjoy holding training camps to help inspire the future generation.",
  },
  {
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2020/07/Damian-Lillard.jpg?quality=90&strip=all",
    whoami:
      "I am Damian Lillard, aka Dame D.O.L.L.A. I play for the Portland Trailblazers where I stay loyal to my team despite losses and doubts by the fans.",
  },
];

const displayPlayerName = document.getElementById("player-name");

// instead of getting children elements one by one, just use this container to get them for simplicity
const selectPlayerContainer = document.querySelector(
  ".select-player-container"
);

const selectButton = document.getElementById("select-button");

// once button clicked, gets the player selected and displays player info appropriately
selectButton.addEventListener("click", () => {
  displayPlayerName.children[0].textContent +=
    selectPlayerContainer.children[1].value;
});
