//Keys button handler
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", calcualte);
});

//get display class
const display = document.querySelector(".display");

//Calculate function
function calcualte(e) {
  const clickedBtnValue = e.target.value;

  if (clickedBtnValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (clickedBtnValue === "C") {
    display.value = "";
  } else {
    display.value += clickedBtnValue;
  }
}
