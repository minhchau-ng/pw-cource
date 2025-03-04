1
const arr = [1, 2, 3, 4, 3, 55, 23];
let firstIndex = -1;
let lastIndex = -1;
let count = 0;
let target = 3;
for (let i of arr) {
    if (i === target) {
        if (firstIndex === -1) {
            firstIndex = count;
        }
        lastIndex = count;
        count++;
    }
}
console.log(
    `firstIndex của ${target} là ${firstIndex} - last index là ${lastIndex}`
);
2.
let str = 'Playwright';
const newArr = [];

for (let i = str.length - 1; i >= 0; i--) { 
    newArr.push(str[i]);
}

console.log(newArr);
3. 
const arr1 = [1, 2, 3, 1, 2, 4, 5]; // Mảng đầu vào
const countMap = {}; // Đối tượng để đếm số lần xuất hiện của từng phần tử

// Đếm số lần xuất hiện của từng phần tử trong mảng
for (let num of arr1) {
    countMap[num] = (countMap[num] || 0) + 1;
}

// Mảng chứa các phần tử duy nhất (xuất hiện đúng 1 lần)
const uniqueElements = [];

for (let num of arr1) {
    if (countMap[num] === 1) {
        uniqueElements.push(num);
    }
}

console.log(uniqueElements); // Output: [3, 4, 5]