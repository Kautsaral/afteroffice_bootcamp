// operasi matematika
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    return "Error: Tidak bisa dibagi 0!";
  }
  return a / b;
}


let pilihan = parseInt(prompt(
  "Pilih operasi:\n1. Penjumlahan\n2. Pengurangan\n3. Perkalian\n4. Pembagian"
));

let angka1 = parseFloat(prompt("Masukkan angka pertama:"));
let angka2 = parseFloat(prompt("Masukkan angka kedua:"));

let hasil;
let operasi;

switch (pilihan) {
  case 1:
    hasil = tambah(angka1, angka2);
    operasi = "Penjumlahan";
    break;
  case 2:
    hasil = kurang(angka1, angka2);
    operasi = "Pengurangan";
    break;
  case 3:
    hasil = kali(angka1, angka2);
    operasi = "Perkalian";
    break;
  case 4:
    hasil = bagi(angka1, angka2);
    operasi = "Pembagian";
    break;
  default:
    operasi = "Tidak valid";
    hasil = "Pilihan operasi salah!";
}

console.log("Operasi: " + operasi);
console.log("Angka 1: " + angka1);
console.log("Angka 2: " + angka2);
console.log("Hasil: " + hasil);
