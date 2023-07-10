function deretBintang(num) {
  let res = "";
  let bunga = ["**", "*"];
  let angka = 1;
  let times = 0;
  let temp;

  while (angka <= num) {
    times++;
    res = res + angka.toString() + bunga[times % 2];

    if (times % 2 === 1) {
      angka = angka + 2;
    } else if (times % 2 === 0) {
      angka = angka + 3;
    }
  }

  if (times % 2 === 1) {
    while (res[res.length - 1] === "*") {
      temp = res.substring(0, res.length - 1);
      res = temp;
    }
  } else {
    if (res[res.length - 3] % 2 !== 0) {
      temp = res.substring(0, res.length - 1);
      res = temp;
    }
  }
  return res;
}
