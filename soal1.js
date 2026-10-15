"use strict";
// NIM: 053834403
// Digit terakhir NIM = 3
const tinggi = 3;
for (let i = 1; i <= tinggi; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
        baris += j + " ";
    }
    console.log(baris.trim());
}
