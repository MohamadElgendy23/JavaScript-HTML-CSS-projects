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

// current option mode (Name is default)
let currOption = "Name";

// make the dropdown options "toggle" when user clicks the button
dropDownButton.addEventListener("click", () => {
  dropDownOptions.style.display === "flex"
    ? (dropDownOptions.style.display = "none")
    : (dropDownOptions.style.display = "flex");
});

// when user clicks one of the options, change the html appropriately
dropDownOptions.addEventListener("click", (event) => {
  // "Name" option
  if (event.target.innerText === "Name" && currOption !== "Name") {
    currOption = "Name";
    backgroundColorInputContainer.children[0].innerText =
      "What Background Color? (Name)";
    foregroundColorInputContainer.children[0].innerText =
      "What Foreground Color? (Name)";
  }
  // "Hex" option
  if (event.target.innerText === "Hex" && currOption !== "Hex") {
    currOption = "Hex";
    backgroundColorInputContainer.children[0].innerText =
      "What Background Color? (Hex)";
    foregroundColorInputContainer.children[0].innerText =
      "What Foreground Color? (Hex)";
  }
  // "Palette" option
  if (event.target.innerText === "Palette" && currOption !== "Palette") {
    currOption = "Palette";
    backgroundColorInputContainer.children[0].innerText =
      "Select A Background Color";
    foregroundColorInputContainer.children[0].innerText =
      "Select A Foreground Color";
  }
});
