const elTimer = document.getElementById("timer");
const elStart = document.getElementById("start");
const elStop = document.getElementById("stop");
const elReset = document.getElementById("reset");

let interval;
let waktuTersisa = 120;

function updateWaktu() {
  let menit = Math.floor(waktuTersisa / 60);
  let detik = waktuTersisa % 60;

  elTimer.innerHTML = `${menit.toString().padStart(2, "0")}:${detik
    .toString()
    .padStart(2, "0")}`;
}

updateWaktu();

elStart.addEventListener("click", () => {
  interval = setInterval(() => {
    waktuTersisa--;
    updateWaktu();

    if (waktuTersisa < 0) {
      clearInterval(interval);
      alert("Istirahat dulu bos");
      waktuTersisa = 120;
      updateWaktu();
    }
  }, 1000);
});

elStop.addEventListener("click", () => {
  clearInterval(interval);
});

elReset.addEventListener("click", () => {
  clearInterval(interval);
  waktuTersisa = 120;
  updateWaktu();
});
