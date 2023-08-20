// useful variables
const dropDownButton = document.getElementById("dropdown-button");
const dropDownOptions = document.getElementById("dropdown-options");

// make the dropdown options "toggle" when user clicks the button
dropDownButton.addEventListener("click", () => {
  dropDownOptions.style.display === "none"
    ? (dropDownOptions.style.display = "flex")
    : (dropDownOptions.style.display = "none");
});
