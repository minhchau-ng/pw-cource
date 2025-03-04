1. 
function printArray(arr) {
    for (let num of arr) {
        console.log(num);
    }
}

// Test
printArray([1, 2, 3]);
2.
function analyzeArray(arr) {
    let sum = 0;
    let max = arr[0];
    let min = arr[0];

    for (let num of arr) {
        sum += num;
        if (num > max) max = num;
        if (num < min) min = num;
    }

    console.log("Tổng:", sum);
    console.log("Giá trị lớn nhất:", max);
    console.log("Giá trị nhỏ nhất:", min);
};
analyzeArray([1, 2, 3]);
3. 
const array1 = [1, 2, 3, 6, 8, 1, 4]; // Khai báo một mảng gốc
const newArray = []; // Tạo một mảng rỗng để chứa kết quả

array1.forEach((item) => { 
    newArray.push(item * 2); // Nhân từng phần tử với 2 và thêm vào mảng mới
});

console.log(newArray); // In ra mảng mới