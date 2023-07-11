const elButton = document.querySelectorAll("button");
const elDisplay = document.getElementById("display");

// Untuk tiap button
for (let i = 0; i < elButton.length; i++) {
  // Ketika di klik
  elButton[i].addEventListener("click", () => {
    const valueButton = elButton[i].textContent;

    if (valueButton === "C") {
      elDisplay.value = "0";
    } else if (valueButton === "=") {
      elDisplay.value = eval(elDisplay.value);
    } else {
      displayValue(valueButton);
    }
  });
}

function displayValue(value) {
  // cek display value

  if (elDisplay.value === "0") {
    elDisplay.value = "";
    elDisplay.value += value;
  } else {
    elDisplay.value += value;
  }
}
