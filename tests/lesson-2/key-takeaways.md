# Version Control System
## Types of Version control system
- Local version control system:save on personal computer
- Centralized version control system: save on one serve
Distributed version control system: save on many serves. For example: Git 

# Git
## Git vs Github
* Git: Phần mềm trên máy tính, VSC, control các version và đưa chúng lên Github
* Github: website, máy chủ lưu trữ các file được init, add, commit, push
## Three stage
* Working directory: New file, modified file 
* Staging Area: Versions, files được lựa chọn để commit. All files will be commit cùng 1 lần => chuyển sang Repository
* Reposity: Commited versions, files, will be pushed to Github 
* Git init => Working directory + git add => Staging Area + git commit -m => Repository
* [Git commit convention](https://www.conventionalcommits.org/en/v1.0.0/)

## Git - Key takeaways 
* **Git init**: Khởi tạo 1 thư mục được Git quản lí 
* Cấu hình:
Cho toàn bộ máy tính:
**Git config --global user.name "Chau"
Git config --global user.email "chaunm.nevents@gmail.com"**
Cho 1 repo
Git config user.name "Chau"
Git config user.email "chaunm.nevents@gmail.com"
* Add files từ working directory sang staging area
**Git add <file name>**. For example: git add file1 or git add file1 file2
Git add . : Add tất cả files chưa add 
* **Git status**: Xem trạng thái các files. Green: staging, red: working directory
* **Git commit -m "message"**
[Git commit convention](https://www.conventionalcommits.org/en/v1.0.0/)
* **Git log**: Xem lịch sử commit 

## Git - Simple workflow
### Use global: 
init => add => commit => push
### No global:
init => config => add => commit => push

## Git commit convention 
In class: <type>: <short_description>
### <type>
* chore: sửa nhỏ lẻ, lỗi chính tả, xóa unused file
* feat: add function, new test case
* fix: sửa lỗi 1 test trước đó 

### Short description
* ít hơn 50 kí tự
* không dấu
* English, Vietnames 

### Example 
chore: delete unused file
feat: add code to exercise 2 


# Javascript basic: Code language 
* Run with browser: Chaka, SpiderMoney, V8 
* Run without browser: Node Js 

## Cách đọc giá trị bằng javascript 
**Tạo file lesson_2/javascript => Open in VSC (code .) => Tạo file 01-hello.js**
### File 
* console.log("Hello World)

### Terminal 
* node lesson_2/javascript/01-hello.js 
=> Đọc được giá trị Hello World của lệnh console.log ("Hello World)
=> sau node, dẫn đủ tên các folder, file dẫn đến file muốn đọc 

## Variance: var, let

### var: var <ten-bien> = <gia_tri>
* thay đổi giá trị được. 
* bắt đầu bằng chữ, _, $. không bắt đầu bằng keyword availabe trong javascript: if, var, let, for,....
* For example: 
**File: 02_variable.js**
var myName = "Chau"
console.log(myName)
**Terminal**
node lesson_2/javascipt/ 02_varibale.js
=> Chau 

* let: thay đổi giá trị được. let <ten_bien> = <gia_tri>

## Constant: const  
* không thay đổi giá trị được
const <ten_bien> = <gia_tri>
* For example
**File: 02_variable.js**
const myAge = 21
console.log(myAge)
**Terminal**
node lesson_2/javascipt/ 02_varibale.js
=> 21

## Data types
* Có 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.
### String
* khai báo 1 chuỗi
* For example: "Chau", "Playwright Việt Nam"
### Number
* Khai báo 1 con số
* For example: 10, -5, 10.4, -5.4 
### Boolean
* Khai báo giá trị đúng sai
* For example: "true", "false"
### For example:
* const myAge = 21
* const myCity = "Vinh Yen"
* const isMale = true 
* const isOld = false 

## Comparison operator (Boolean)
### So sánh hơn kém: <,>
* For example
* **File 05_comparison.js**
* const a = 10
const b = 20
const c = 30
const result1 = a<b
const result2 = b>c

* console.log(result1)
console.log(result2)

* **Terminal**
* node lesson-2/javascript/05_comparison
* => true // a<b đúng
false // b>c sai 

### So sánh bằng: ===, ==, !=, !==, <=,>=
**File 05_comparison.js**
* const a = 10
const b = 20
const c = 20
const result3 = a!==b
const result4 = b===c

* console.log(result3)
console.log(result4)
* **Terminal**
* node lesson-2/javascript/05_comparison
=> true // a!==b đúng vì a=10 # b=20
true // b===c đúng vì =20

## Unary operator: toán tử 1 ngôi 
* Dùng để tăng hoặc giảm giá trị
* i++ bằng với i=i+1
* i-- bằng với i=i-1
* For example:
* **File 06_unary.js**
* let a = 10
++a
a++
console.log(a)
* **Terminal**
* node lesson-2/javascript/06_unary.js
=> 12 

## Arithmetic operator = toán tử số học
* Dùng tính toán giá trị biểu thức
* Các phép toán: +, -, *, /
* Không chia cho 0
* For example:
* **File 07_arithmetic.js**
* const a = 5
const b = 10
const result1 = a+b
const result2 = a-b
const result3 = a*b
const result4 = a/b

* console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

* **Terminal**
* node lesson-2/javascript/07_arithmetic.js
=> 15
-5
50
0.5

## Conditional
* Dùng để kiểm tra có nên thực hiện một đoạn logic không
* For example
* **File 08_conditional.js**
* let diemSo = 9.5
if (diemSo > 9) {console.log(Loai gioi)}
if (diemSo > 7) {console.log(Loai kha)}

* **Terminal**
* node lesson-2/javascript/08_conditional.js
=> Loai gioi
Loai kha
* Sẽ chạy ra cả Loai gioi, Loai kha, chạy lần lượt 

## Loops
* Dùng để thực hiện một đoạn logic một số lần nhất định
* Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {code}
* For example:
* **File 09_loops.js**
* for(let i = 0; i < 4; i++) {console.log("Xin chao")}
* **Terminal**
* node lesson-2/javascript/09_loops.js
=> Xin chao
Xin chao
Xin chao
Xin chao
# Format VSC: 
## Window: Alt + Shift +F
## Mac: Option + Shift + F