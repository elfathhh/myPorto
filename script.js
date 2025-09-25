// let nama = "bani";
// let umur = 20;

// console.log ("Hi, nama saya " + nama + "umur ku " + umur);

// let angka1 = 12;
// let angka2 = 21;

// let hasil = angka1 +angka2;
// console.log("hasil operasi dari " + angka1 +  "+" + angka2 + " = " + hasil);

const angkaTampil = document.querySelector(".card .angka");
const tambah = document.querySelector(".card .buttons .btn1");
const kurang = document.querySelector(".card .buttons .btn2");
const reset = document.querySelector(".card .buttons .btn3");

let angka = 0;

tambah.addEventListener("click", function() {
    angka ++;
    angkaTampil.textContent = angka;
});

kurang.addEventListener("click", function() {
    angka --;
    angkaTampil.textContent = angka;
});

reset.addEventListener("click", function() {
    angka = 0;
    angkaTampil.textContent = angka;
});




