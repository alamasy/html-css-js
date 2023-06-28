const elButton = document.querySelectorAll("button");
console.log(elButton);
console.log("hello");

for (let i = 0; i < elButton.length; i++) {
  elButton[i].addEventListener("click", () => {
    const value = elButton[i].textContent;
    console.log(value);
  });
}

console.log(value);
