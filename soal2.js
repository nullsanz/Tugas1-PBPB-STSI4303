"use strict";
// NIM: 053834403
const awal = 3;
const beda = 5;
const jumlah = 10;
const deret = [];
for (let i = 0; i < jumlah; i++) {
    deret.push(awal + i * beda);
}
console.log(deret.join(", "));
