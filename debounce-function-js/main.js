const debounce = (callback, delay) => {
  let timeoutID; // Variabel untuk menyimapn id dari method setTimeOut

  return function () {
    clearTimeout(timeoutID); // hapus setTimeout supaya tidak terjadi pemanggilan function yang berulang

    // set waktu untuk mengaktifkan function callback dalam waktu tertentu
    timeoutID = setTimeout(() => {
      callback();
    }, delay);
  };
};

function printNama() {
  console.log("alam");
}

const debouncePrintNama = debounce(printNama, 3000);

// Function print nama yang telah di wrap oleh function debounce akan dieksekusi dalam waktu tertentu dan bila ada pemanggilan function printName sebelum eksekusi yang sebelumnya jalan maka waktu akan di reset
debouncePrintNama();
