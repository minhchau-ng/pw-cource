# A. Git
## 1. Undo actions
### 1.1. git log
* Xem lại lịch sử commit 
* Click q để out khỏi chế độ xem commit 
### 1.2. git commit --amend
* Thay đổi commit message 
* git commit --amend -m"message": thay đổi tên message nhanh chóng
* git commit --amend => gõ i để sửa (vào chế độ insert) => esc (thoát chế độ insert) => :wq (write and quit)
### 1.3. git restore --staged <file>
* Đưa từ vùng Staging về Working Directory
* Ex: git restore --staged file1
* git restore --staged .: đưa tất cả file ở staging về WD
### 1.4. git reset HEAD~1
* Đưa từ vùng repository về working directory (uncommit)
* Không đưa file từ repository về staging được 
* Tính theo commit, không tính theo số lượng file 
* Ex: 
Repository: file1 (newest), file2, file3 (oldest). Uncommit file1 (1 file commit gần nhất): git reset HEAD~1. Uncommit 3 file commit gần nhất: git reset HEAD~3. 

## 2. Branching model 
* Dùng branch để tạo ra một vùng làm việc mới, không ảnh hưởng tới vùng làm việc đã ổn định.
* Luôn tạo branch mới trước khi thực hiện một lệnh copy từ internet
* Nhánh mới sẽ thừa hưởng hết nội dung của nhánh tạo ra nó 
### 2.1. git branch <ten_branch> => git checkout <ten_branch>
* git branch <ten_branch>: tạo nhánh mới
* git check out <ten_branch>: đi đến nhánh mới đã được tạo 
### 2.2. git checkout -b <ten_branch>
* Tạo + trực tiếp đi đến nhánh mới
* Nếu đã có nhánh được tạo, không dùng lệnh này, chỉ dùng lệnh git checkout <ten_branch> để đi đến nhánh đó 

## 3. .gitignore: bỏ qua 
* Trong file .gitignore, các file, folder không hiện lên lúc chạy code, và hiển thị màu xám 
* Thư mục có /. EX: matkhau/ 
* File không có /, có tên file thôi. Ex: matkhau 

# B. Javascript 
## 1. Convention 
* snake_case: chưa dùng
* kebab-case: tên file. Ex: file-01.js
* camelCase: tên biến. Ex: var myName = "Chau"
* PascalCase: tên class. Ex: const LopHoc = "K12"
* dấu ; là 1 convention, nên có để kết thúc đoạn code của mình, không bị lẫn với code mới sau này add vào 
## 2. Logical operator
### 2.1. && : cả 2 vế của mệnh đề đều đúng
* Vế 1 phải đúng thì mới chạy code được
* Ex1: Chạy ra kết quả "a nho hon b va b nho hon c"
* const a = 5
* const b =10
* const c = 15
* if (a<b && c>b) {
    console.log("a nho hon b va b nho hon c");
}
### 2.2. || : một trong 2 vế đúng
* Chỉ cần vế 1 đúng thì không chạy vế 2 nữa 
* Ex2: Cộng điểm thi đại học nếu đáp ứng 1 trong 2 yếu tố: Dân tộc và Con thương binh liệt sĩ
* const student = {
const danToc: True,
conThuongBinhLietSi: False  
}
If (danToc || conThuongBinhLietSi) {
    console.log("congdiemthidaihoc");
}
### 2.3. ! : đảo ngược lại giá trị của mệnh đề
* Ex3: 
* const thoiTiet = "khongmua"
* If (!khongmua) {
    console.log(nghihoc);
}
## 3. Object = đối tượng
### 3.1. Khai báo 
* Dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số (let or const)
* let/const <ten_object> = {
<thuoc_tinh_1>: <gia_tri_1>,
...
<thuoc_tinh_n>: <gia_tri_n>
}
* Ex1: const student = {
    "name": "Chau",
    "age": 21,
    "isLoveComputer": True
}
* Nếu tên object không có dấu cách, "" và '' optional
* Nếu tên object có dấu cách, "" và '' bắt buộc phải có 
* Ex2: "personal email" có dấu cách nên phải có "" hoặc ''. personalEmail không có dấu cách nên không cần có "" hoặc '' 
### 3.2. Truy xuất thuộc tính của giá trị 
* console.log(student.name) => Chau
### 3.3. Khai báo lại/ Gán lại 
* Không thể thay đổi giá trị const của object, nhưng thay đổi được giá trị của thuộc tính trong object 
* Ex: khai báo lại như sau: 
student.name = "Ngoc" or student["name"] = "Ngoc"
### 3.4. Lệnh for...in 
* Là một vòng lặp được sử dụng để duyệt qua tất cả các thuộc tính (key) của một object
* for (let key in object) {
*    // Thực hiện thao tác với key hoặc object[key]
* }
* key là tên của từng thuộc tính (key) trong object
* object[key] là giá trị tương ứng với key đó
## 4. Array: Mảng
### 4.1. Tạo mảng
* Đánh số thứ tự các giá trị trong array, bắt đầu đánh từ 0,1,2,3,4,....
* Ex1: 
* const arr1 = ["123", "456", "789", "101112", "131415", "161718"]
* console.log(arr1[2] => 789)
### 4.2. Truy xuất mảng
* console.log(arr.length) => truy xuất độ dài array
* Ex2: console.log(arr1.length) => 6
* Ex3: console.log(arr1[arr1.length - 1]) => 161718 (số cuối cùng của array)
* Ex4: console.log(arr1[arr1.length / 2]) => 101112
## 5. Function: hàm
* Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
### 5.1. Khai báo
* function <nameFunction>() {
// code
}
* Ex1: 
* File: 
* funtion passWord() {
    console.log("phone_123456");
    console.log("computer_098765);
    console.log("tv_1234);
}
* Terminal: 
* passWord
* passWord
* => phone_123456 computer_098765 tv_1234 phone_123456 computer_098765 tv_1234

### 5.2. Parameter: tham số
* Tham số nằm trong (), ở ngay sau nameFunction 
* Ex2: 
* function chaoTheoTenVaLop(ten, lop) {
    console.log("Toi ten la: ${ten}, toi hoc lop: ${lop});
}
* chaoTheoTenVaLop("Chau", "K12")
* chaoTheoTenVaLop("Hanh", "K12")
* => Toi ten la: Chau, toi hoc lop: K12  
* Toi ten la: Hanh, toi hoc lop: K12
### 5.3. Return value: Giá trị trả về 
* Ex3: 
* function kiemTraDiemSo(diemSo) {
    if (diemSo >= 9) {
    return "gioi";
    }
    if (diemSo<9 && diemSo>=7) {
        return "kha";
    }
    if (diemSo <7 && diemSo >=5) {
        return "trung binh";
    }
    if (diemSo<5 && diemSo>=3) {
        return "yeu";
    }
    }
* const result = kiemTraDiemSo(10);
console.log(result)
* => gioi 