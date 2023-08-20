// useful variables
const dropDownButton = document.getElementById("dropdown-button");
const dropDownOptions = document.getElementById("dropdown-options");

const backgroundColorInputContainer = document.querySelector(
  ".bg-color-container"
);
const foregroundColorInputContainer = document.querySelector(
  ".fg-color-container"
);

// current option mode (Name is default)
let currOption = "Name";

// the colors the user inputted (represents both "Name" and "Hex")
let currBackgroundColor = "";
let currForegroundColor = "";

// make the dropdown options "toggle" when user clicks the button
dropDownButton.addEventListener("click", () => {
  dropDownOptions.style.display === "flex"
    ? (dropDownOptions.style.display = "none")
    : (dropDownOptions.style.display = "flex");
});

// when user clicks one of the options, change content appropriately
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
    document.querySelector(".bg-color-palette").style.display = "flex";
    backgroundColorInputContainer.children[1].innerHTML = "";
    backgroundColorInputContainer.children[1] =
      document.querySelector(".bg-color-palette").innerHTML;

    foregroundColorInputContainer.children[0].innerText =
      "Select A Foreground Color";
    document.querySelector(".fg-color-palette").style.display = "flex";
    foregroundColorInputContainer.children[1].innerHTML = "";
    foregroundColorInputContainer.children[1] =
      document.querySelector(".fg-color-palette").innerHTML;
  }
});

// get the colors the user inputted
addEventListener("change", (event) => {
  if (event.target.id === "input-bg-color") {
    currBackgroundColor = event.target.value;
  } else {
    currForegroundColor = event.target.value;
  }
});

// when user clicks the "Make Choice" button which triggers the color changes
addEventListener("click", (event) => {
  if (event.target.id === "submit-bg-color") {
    document.body.style.backgroundColor = currBackgroundColor;
  } else {
    document.querySelector(".fg-color-container").style.backgroundColor =
      currForegroundColor;
  }
});

addEventListener("change", (event) => {
  if (event.target.id === "bg-palette") {
    document.body.style.backgroundColor = event.target.value;
  }
});
