const elColorContainers = document.querySelectorAll(".color-container");

const elButton = document.getElementById("btn");
elButton.addEventListener("click", () => {
  generate();
});

function generate() {
  for (let i = 0; i < elColorContainers.length; i++) {
    const element = elColorContainers[i];

    element.style.background = generateRandomColor();
  }
}

function generateRandomColor() {
  const colorChar = "abcdef0123456789";
  const colorLength = 6;
  let res = "#";

  for (let i = 0; i < colorLength; i++) {
    const randNumber = Math.floor(Math.random() * colorChar.length);
    res += colorChar[randNumber];
  }
  return res;
}

let tes = generateRandomColor();
console.log(tes);
