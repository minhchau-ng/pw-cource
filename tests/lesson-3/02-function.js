1. 
function calculatedBMI(height, weight) {
    let BMI = weight / (height * height)
if (BMI < 18.5) {
    return "Thieu can"
};
if (BMI < 25) {
    return "Binh thuong"
};
if (BMI < 30) {
    return "Thua can"
};
if (BMI >= 30) {
    return "Beo phi"
};
};
console.log(calculatedBMI(1.78, 69));
2.
function temperatureExchange(value, type) {
    if (type === "C") {
        return (value * 9/5 + 32)
    };
    if (type === "F") {
        return ((value - 32) * 5 / 9)
    };
    if (type !== "C" && type !== "F") {
        return "not available" 
    };
};
console.log(temperatureExchange(50, "C"));
console.log(temperatureExchange(43, "F"));
console.log(temperatureExchange(78, "X"));
3.
const arr = ["1", "2", "3", "4"];
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
};
console.log(sumArray(arr));
4. 
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) { 
        if (num % i === 0) { 
            return false; 
        }
    }
    return true;
};
function filterPrimes(arr) {
    let primeNumbers = [];

    for (let i = 0; i < arr.length; i++) { 
        if (isPrime(arr[i])) {
            primeNumbers.push(arr[i]);
        }
    }

    return primeNumbers;
};
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19, 20];
console.log(filterPrimes(numbers));
5. 
let users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" }
];

function updateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
        }
    }
}
updateEmail("Bob", "bob@newmail.com");
console.log(users);
6. 
let students = [
    { name: "Alex", score: 85 },
    { name: "Ben", score: 70 },
    { name: "Cathy", score: 90 }
];

function averageScore(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += students[i].score;
    }
    return sum / students.length;
}

console.log(averageScore(students)); 
7. 
let cart = [
    { name: "product 1", price: 100 },
    { name: "product 2", price: 200 },
    { name: "product 3", price: 0 }
];

function checkValidPrices(cart) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].price <= 0) {
            return false; 
        }
    }
    return true;
}
console.log(checkValidPrices(cart)); 
8. 
function isOpen(hour) {
    if (hour >= 9 && hour <= 21) {
        console.log("Cửa hàng đang mở");
    } else {
        console.log("Cửa hàng đóng cửa");
    }
}

isOpen(10);
isOpen(22);
9. 
function ticketPrice (age) {
    if (age < 5) {
        console.log("Price: free"); 
    }
    if (age >= 18) {
        console.log("Price: 100k");
    }
    if (age >= 6 && age <= 17) {
        console.log("Price: 50k");
    }
};
ticketPrice(3);
ticketPrice(10);
ticketPrice(20); 
10. 
function monthName (month) {
    switch (month) {
        case 1:
            console.log("Thang 1");
            break;
        case 2:
            console.log("Thang 2");
            break;
        case 3: 
            console.log("Thang 3"); 
            break;
        case 4: 
             console.log("Thang 4");
             break;
        case 5:
            console.log("Thang 5");
            break;
        case 6:
            console.log("Thang 6");
            break;
        case 7: 
            console.log("Thang 7");
            break;
        case 8:
           console.log("Thang 8");
           break;
        case 9:
           console.log("Thang 9");
           break;
        case 10:
            console.log("Thang 10");
            break;
        case 9:
           console.log("Thang 9");
           break;
        case 10:
            console.log("Thang 10");
            break;
        case 11:
            console.log("Thang 11");
            break;
        case 12:
            console.log("Thang 12");
            break;
        default:
            console.log("Unavailable month")
    }
};
monthName(6);
monthName(12);
monthName(15);
11. 
function weatherCondition (temp) {
    if (temp > 35) {
        console.log("Nóng")
    };
    if (temp < 30 && temp >= 20) {
        console.log("Mát")
    };
    if (temp < 20) {
        console.log("Lạnh");
    }
};

weatherCondition(36);
weatherCondition(25);
weatherCondition(15);
12. 
function temperatureStatus (temperature){
    if (temperature >= 30) {
        console.log("nóng");
    }
    if (temperature < 30 && temperature >= 20) {
        console.log("mát");
    }
    if (temperature <= 20) {
        console.log("lạnh");
    }
};
temperatureStatus(25);
temperatureStatus(49);
temperatureStatus(10);

