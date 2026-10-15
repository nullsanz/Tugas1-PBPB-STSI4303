"use strict";
// NIM: 053834403
const batas = 13;
function cekPrima(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
const prima = [];
for (let i = 1; i <= batas; i++) {
    if (cekPrima(i))
        prima.push(i);
}
console.log(prima.join(", "));
