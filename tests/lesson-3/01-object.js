const { Certificate } = require("crypto");

1. 
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year)
2. 
let person = {
    "name": "Chau",
    "address": {
        "street": "TonThatTung",
        "city": "Hanoi",
        "country": "Vietnam"
    }
};
console.log(person.address.street)
3. 
let student = {
    "name": "Chau",
    "grades": {
        "math": 10,
        "english": 9,
    }
};
console.log(student["grades"]["math"])
4.
let product = {
    "product1": 10,
    "product2": 20,
    "product3": 30
};
for (let item in product) {
    console.log(`Sản phẩm: ${item}, Giá: ${product[item]}`)
};
5.
const settings = {
    "volume": 100,
    "brightness": 25
};
settings.volume = 150;
console.log(settings);
6. 
const bike = {
    "weight": 20,
    "brand": "Cici" 
};
bike.color = "pink"
console.log(bike)
7. 
const employee = {
    "name": "Chau",
    "age": 21
};
delete employee.age;
console.log(employee);
8.
const school = {
    "classA": ["An", "Bình", "Châu"],
    "classB": ["Đào", "Hương", "Giang"]
};
console.log(school);
