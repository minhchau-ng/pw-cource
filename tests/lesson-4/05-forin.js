1. 
function printObject(obj) {
    for (let key in obj) {
        console.log(key + "=" + obj[key]);
    }
};
let student2 = { name: "Alex", age: 10 };
printObject(student2);
2. 
const student1 = {
    name: "Alex",
    age: 10,
    salary: 20
};

let sum = 0; // Khởi tạo biến tổng

for (let key in student1) {
    if (typeof student1[key] === "number") { // Kiểm tra nếu giá trị là số
        sum += student1[key]; // Cộng dồn vào tổng
    }
}

console.log("Tổng =", sum);
3. 
const student = {
    name: "Alex",
    age: 10
};

let keysArray = []; // Khởi tạo mảng rỗng để chứa các thuộc tính

for (let key in student) {
    keysArray.push(key); // Thêm tên thuộc tính vào mảng
}
console.log(keysArray);