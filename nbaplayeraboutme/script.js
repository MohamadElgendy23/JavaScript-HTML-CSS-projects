// the 3 players array. contains the info and image to be displayed on selection. utilized for easy access.
const playersArr = [
  // Lebron James
  {
    image:
      "https://img.theepochtimes.com/assets/uploads/2019/10/21/Lebron-James-1200x800.jpg",
    whoami:
      "I am Lebron James, an NBA champion who currently plays for the Los Angeles Lakers. I am also referred to as King James or the GOAT since I am arguably the best basketball player in the world.",
    careertimeline:
      "1) Named Ohio's Mr. Basketball three times while leading his highschool, 2) Earned three Ohio State championships in college, 3) Attended the NBA draft at only 18 years old, and playing for multiple years and dominating the competition, now perceived as the best NBA player in history",
  },

  // Stephen Curry
  {
    image:
      "https://wallpapers.com/images/hd/steph-curry-3840-x-2400-picture-epdmvndsfmsshxyz.jpg",
    whoami:
      "I am Stephen Curry, the 3 point master who before shooting a 3, better pray the ball is flat. I currently play for the Golden State Warriors and enjoy holding training camps to help inspire the future generation.",
    careertimeline:
      "1) Led all first-year players in the country as a college freshman, 2) Led 10th-seeded Davidson on an improbable run to the Elite Eight as a sophomore, 3) Entered the 2009 NBA draft and got selected by the Warriors. After that it was history",
  },

  // Damian Lillard
  {
    image:
      "https://nypost.com/wp-content/uploads/sites/2/2020/07/Damian-Lillard.jpg?quality=90&strip=all",
    whoami:
      "I am Damian Lillard, aka Dame D.O.L.L.A. I play for the Portland Trailblazers where I stay loyal to my team despite losses and doubts by the fans.",
    careertimeline: `1) As a freshman at Weber State, averaged 11.5 points per game and was named the Big Sky Conference Freshman of the Year, 2) Led the Wildcats to the conference championship sophomore year, 3) As a top guard in the country, entered the NBA draft in 2012 and dominated the comp as a Trailblazer`,
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

// the about me buttons
const aboutMeButtons = document.querySelector(".buttons-container");

// once button clicked, gets the player selected and displays player info appropriately
selectButton.addEventListener("click", () => {
  const selectedPlayerName = selectPlayerContainer.children[1].value;
  displayPlayerName.children[0].textContent += selectedPlayerName; // get the span element contained in the p tag and append selected player name to it

  // replace (use map to index strategy for players array)
  if (selectedPlayerName === "Lebron James") {
    replaceOnSubmit(0);
    aboutMeButtons.addEventListener("click", (e) => {
      handleClick(0, e);
    });
  } else if (selectedPlayerName === "Stephen Curry") {
    replaceOnSubmit(1);
    aboutMeButtons.addEventListener("click", (e) => {
      handleClick(1, e);
    });
  } else {
    aboutMeButtons.addEventListener("click", (e) => {
      handleClick(2, e);
    });
    replaceOnSubmit(2);
  }
});

// helper function for replacing the original body html on "submit"; when user successfully selects a player
const replaceOnSubmit = (index) => {
  document.querySelector(".outer-section").style.display = "none";
  document.querySelector(".about-me-section").style.display = "flex";

  document.getElementById("player-image").src = playersArr[index].image;

  // default content
  document.querySelector(".content-container").children[0].textContent =
    "Who Am I?";
  document.querySelector(".content-container").children[1].textContent =
    playersArr[index].whoami;
};

// callback function to handle when user clicks one of the buttons in the about me container
const handleClick = (index, event) => {
  document.querySelector(".content-container").children[0].textContent =
    event.target.innerText;

  if (event.target.id === "who-am-i-btn") {
    document.getElementById("nba-link").style.display === "flex"
      ? (document.getElementById("nba-link").style.display = "none")
      : null;
    aboutMeButtons.children[0].style.backgroundColor = "rgb(229, 235, 229)";

    // reset other buttons to original color (previously selected case)
    aboutMeButtons.children[1].style.backgroundColor = "rgb(193, 193, 193)";
    aboutMeButtons.children[2].style.backgroundColor = "rgb(193, 193, 193)";

    document.querySelector(".content-container").children[1].textContent =
      playersArr[index].whoami;
  } else if (event.target.id === "career-timeline-btn") {
    document.getElementById("nba-link").style.display === "flex"
      ? (document.getElementById("nba-link").style.display = "none")
      : null;
    aboutMeButtons.children[1].style.backgroundColor = "rgb(229, 235, 229)";

    // reset other buttons to original color (previously selected case)
    aboutMeButtons.children[0].style.backgroundColor = "rgb(193, 193, 193)";
    aboutMeButtons.children[2].style.backgroundColor = "rgb(193, 193, 193)";

    document.querySelector(".content-container").children[1].textContent =
      playersArr[index].careertimeline;
  } else {
    aboutMeButtons.children[2].style.backgroundColor = "rgb(229, 235, 229)";

    // reset other buttons to original color (previously selected case)
    aboutMeButtons.children[0].style.backgroundColor = "rgb(193, 193, 193)";
    aboutMeButtons.children[1].style.backgroundColor = "rgb(193, 193, 193)";

    document.getElementById("nba-link").style.display = "flex";
    document.querySelector(".content-container").children[1].innerText =
      "Want to learn more? Here's the link to the official NBA website players section where you can navigate to this player or other players in the NBA: ";
  }
};
