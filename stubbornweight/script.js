// useful variables
const lhsContainer = document.querySelector(".lhs-container");
const rhsContainer = document.querySelector(".rhs-container");

const buttonsArr = Array.from(document.querySelectorAll("button"));

const wakeUpTimeButton = document.getElementById("wake-up-time-button");

buttonsArr.forEach((button) => {
  button.addEventListener("click", (e) => toggleButtonOptions(e.target));
});

// onclick callback for buttons
const toggleButtonOptions = (buttonType) => {
  if (buttonType === wakeUpTimeButton) {
    lhsContainer.innerHTML +=
      '<div class="wake-up-time-options"><button>6 AM</button><button>7 AM</button><button>8 AM</button></div>';
  }
};
