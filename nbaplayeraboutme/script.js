// the 3 players array. contains the info and image to be displayed on selection.
const playersArr = [
  // Lebron James
  {
    image:
      "https://nbc-2.com/wp-content/uploads/2020/07/hypat…1a8d275bcb-h_27f46f360593d4f3b292f98dc5e1db17.jpg",
    whoami:
      "I am Lebron James, an NBA champion who currently plays for the Los Angeles Lakers. I am also referred to as King James or the GOAT since I am arguably the best basketball player in the world.",
    careertimeline: [
      "Named Ohio's Mr. Basketball three times while leading his highschool",
      "Earned three Ohio State championships in college and then attended the NBA draft at only 18 years old",
      "After playing for multiple years and dominating the competition, now perceived as the best NBA player in history",
    ],
  },

  // Stephen Curry
  {
    image:
      "https://blacksportsonline.com/wp-content/uploads/2023/08/Kobe-Bryant-angry.jpg",
    whoami:
      "I am Stephen Curry, the 3 point master who before shooting a 3, better pray the ball is flat. I currently play for the Golden State Warriors and enjoy holding training camps to help inspire the future generation.",
    careertimeline: [
      "Led all first-year players in the country as a college freshman",
      "Led 10th-seeded Davidson on an improbable run to the Elite Eight as a sophomore",
      "Entered the 2009 NBA draft and got selected by the Warriors. After that it was history",
    ],
  },

  // Damian Lillard
  {
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2020/07/Damian-Lillard.jpg?quality=90&strip=all",
    whoami:
      "I am Damian Lillard, aka Dame D.O.L.L.A. I play for the Portland Trailblazers where I stay loyal to my team despite losses and doubts by the fans.",
    careertimeline: [
      "As a freshman at Weber State, averaged 11.5 points per game and was named the Big Sky Conference Freshman of the Year",
      "Led the Wildcats to the conference championship sophomore year",
      "As a top guard in the country, entered the NBA draft in 2012 and dominated the comp as a Trailblazer",
    ],
  },
];

const displayPlayerName = document.getElementById("player-name");

const bodyContainer = document.querySelector(".body-container");

// instead of getting children elements one by one, just use this container to get them as needed for simplicity
const selectPlayerContainer = document.querySelector(
  ".select-player-container"
);

// the "submit" button
const selectButton = document.getElementById("select-button");

// the buttons for the about me container
const whoAmIButton = document.getElementById("who-am-i-btn");
const careerTimeLineButton = document.getElementById("career-timeline-btn");
const learnMoreButton = document.getElementById("learn-more-btn");

// once button clicked, gets the player selected and displays player info appropriately
selectButton.addEventListener("click", () => {
  const selectedPlayerName = selectPlayerContainer.children[1].value;
  displayPlayerName.children[0].textContent += selectedPlayerName; // get the span element contained in the p tag and append selected player name to it

  // replace
  replaceOnSubmit();
});

// helper function for replacing the original body html on "submit"; when user successfully selects a player
const replaceOnSubmit = () => {
  document.querySelector(".outer-section").style.display = "none";
  document.querySelector(".about-me-section").style.display = "flex";

  
};
