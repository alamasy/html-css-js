const text =
  "Rata-rata kita membaca sekitar 0.2 detik per kata. Tapi tahukah kamu bila kita membaca tanpa menggerakkan mata kita bisa membaca lebih cepat dengan mudah. Seperti saat ini kamu sedang membaca sekitar 0.15 detik per kata yang mana itu menakjubkan. Karena rata-rata kecepatan baca kita sekitar 0.2 detik perkata. Sekarang kamu sedang membaca di 0.12 detik per kata. Kendati membaca bukan melulu soal kecepatan tapi menyenangkan untuk tahu bahwa gerakan mata saat membaca mengambil waktu yang cukup signifikan dibanding tanpa menggerakkan mata. Anyway semoga hari kalian menyenangkan. Terima kasih :)";
const words = text.split(" ");
const elButton = document.getElementById("start");
const elTextDisplay = document.getElementById("text");
let index = 0;
let speed = 200;
let interval;

// Funtion untuk display text
function renderText(text) {
  if (text) {
    elTextDisplay.innerText = text;
  }
}

elButton.addEventListener("click", () => {
  // Disable button
  elButton.classList.toggle("linethough");
  elButton.disabled = true;

  interval = setInterval(() => {
    wrapper();
  }, speed);
});

function wrapper() {
  if (index === words.length) {
    // Reset button style setelah tidak ada lagi kata yang dirender
    elButton.classList.toggle("linethough");
    elButton.disabled = false;
    clearInterval(interval);
  }
  console.log(index);
  renderText(words[index]);
  index++;
}

function updateSpeed(word) {
  if (word === "mudah.") {
    speed = 150;
  } else if (word === "perkata.") {
    speed = 120;
  }
}
