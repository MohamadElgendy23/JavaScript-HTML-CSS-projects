// useful variables
const dropDownButton = document.getElementById("dropdown-button");
const dropDownOptions = document.getElementById("dropdown-options");
const optionButtons = dropDownOptions.children;

const backgroundColorInputContainer = document.querySelector(
  ".bg-color-container"
);
const foregroundColorInputContainer = document.querySelector(
  ".fg-color-container"
);

// make the dropdown options "toggle" when user clicks the button
dropDownButton.addEventListener("click", () => {
  dropDownOptions.style.display === "none"
    ? (dropDownOptions.style.display = "flex")
    : (dropDownOptions.style.display = "none");
});

// when user clicks one of the options, change the html appropriately
dropDownOptions.addEventListener("click", (event) => {
  // "Name" option
  if (event.target.innerText === "Name") {
  }
  // "Hex" option
  else if (event.target.innerText === "Hex") {
  }
  // "Palette" option
  else {
  }
});
