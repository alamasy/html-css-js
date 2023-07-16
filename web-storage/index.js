const elBtn = document.getElementById("btn");

localStorage.setItem("name", "Alam Asyarie"); // Menyimpan data di local storage
const devaaamee = localStorage.getItem("name"); // Mengambil variabel di local storage lalu simpan di variabel devaaamee
console.log(devaaamee);

localStorage.removeItem("name");
const devaa = localStorage.getItem("name");

console.log(devaa ?? "ga ada bos");
