1.
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
};
console.log(sum);
2.
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    };
};
3. 
let arrOddNumber = []
for (let i = 1; i <= 99; i+= 2) {
    arrOddNumber.push(i);
};
console.log(arrOddNumber);
4. 
let arrEmail = []
for (let i = 1; i<= 10; i++) {
    arrEmail.push("user" + i + "@gmail.com");
};
console.log(arrEmail);
5. 
let arrRevenue = [
    { "month": 1, "total": 100},
    { "month": 2, "total": 200 },
    { "month": 3, "total": 150 },
    { "month": 4, "total": 250 },
    { "month": 5, "total": 300 },
    { "month": 6, "total": 180 },
    { "month": 7, "total": 400 },
    { "month": 8, "total": 220 },
    { "month": 9, "total": 130 },
    { "month": 10, "total": 270 },
    { "month": 11, "total": 350 },
    { "month": 12, "total": 500 }
];
let totalRevenue = 0;
for (let i = 0; i <= 11; i++) {
    totalRevenue += arrRevenue[i].total;
}
console.log(totalRevenue);