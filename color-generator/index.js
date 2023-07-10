// function for generate random hexa value of color
function generateRandomColor() {
  const colorChar = "ABCDEF0123456789";
  const colorLength = 6;
  let res = "#";

  for (let i = 0; i < colorLength; i++) {
    const randNumber = Math.floor(Math.random() * colorChar.length);
    res += colorChar[randNumber];
  }
  return res;
}

let colorValue;
const elColorContainers = document.querySelectorAll(".color-container");
function generate() {
  for (let i = 0; i < elColorContainers.length; i++) {
    const element = elColorContainers[i];
    colorValue = generateRandomColor();

    element.style.background = colorValue;
    element.setAttribute("data-color", colorValue);
  }
}

const elButton = document.getElementById("btn");
elButton.addEventListener("click", () => {
  console.log("halo");

  generate();
});

const copyContent = async (color) => {
  try {
    await navigator.clipboard.writeText(color);
    if (color === "") {
      alert("Warna belum ada");
    } else {
      alert(`Warna ${color} telah dicopy ke clipboard`);
    }
  } catch (err) {
    alert("Failed to copy: ", err);
  }
};

for (let i = 0; i < elColorContainers.length; i++) {
  const element = elColorContainers[i];
  element.addEventListener("click", function () {
    copyContent(element.getAttribute("data-color"));
  });
}
