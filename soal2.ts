// NIM: 053834403
const awal: number = 3;
const beda: number = 5;
const jumlah: number = 10;

const deret: number[] = [];
for (let i = 0; i < jumlah; i++) {
    deret.push(awal + i * beda);
}

console.log(deret.join(", "));
