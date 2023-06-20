const elButtons = document.querySelectorAll("button");

for (let i = 0; i < elButtons.length; i++) {
  elButtons[i].addEventListener("click", () => {
    const buttonValue = elButtons[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      appendValue(buttonValue);
    }
  });
}

let elDIsplay = document.getElementById("result");
elDIsplay.value = "0";
function clearResult() {
  elDIsplay.value = "0";
}

function calculate() {
  elDIsplay.value = eval(elDIsplay.value);
}

function appendValue(buttonValue) {
  if (elDIsplay.value === "0") {
    elDIsplay.value = "";
    elDIsplay.value += buttonValue;
  } else {
    elDIsplay.value += buttonValue;
  }
}
