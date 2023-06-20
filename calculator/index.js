const elButtons = document.querySelectorAll("button");

for (let i = 0; i < elButtons.length; i++) {
  elButtons[i].addEventListener("click", () => {
    const buttonValue = elButtons[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      elDIsplay = "";
      appendValue(buttonValue);
    }
  });
}

let elDIsplay = document.getElementById("result");
// elDIsplay.value = 0;
function appendValue(buttonValue) {
  elDIsplay.value += buttonValue;
}
