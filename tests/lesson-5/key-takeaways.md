# A. DOM
## 1. DOM là gì?
- Document Object Model
## 2. Node 
- Node là đơn vị cơ bản của dome
- Cấu trúc 1 element: <option>United States</option>
- Example: <option value="usa">United States</option>
- Opening tag: <option value="usa">
- Closing tag: </option>
- Text: United States
- object="value": value="usa"
## 3. Các thẻ HTML thường gặp
- Thẻ <div> (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ <h1></h1> đến <h6></h6> (viết tắt của heading): dùng để tạo ra các header phân cấp
theo thứ tự từ lớn đến bé.
- Thẻ <form></form>: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
- thead = table heading
- tr = table row = 1 dòng
- th: table heading: text in đậm
- tbody
- tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.
# B. Selector - XPath selector
* XPath = XML Path
* Nên dùng XPath tương đối
## 1. XPath tuyệt đối 
* đi dọc theo cây DOM
* bắt đầu bởi /
* Ví dụ: /html/body/div[2]/form/div[1]/input
## 2. XPath tương đối 
* bắt đầu bởi //
* Format: //tenthe[@thuoctinh=”giatri”]
* Ví dụ: //div[@class = 'form group' and @id = 'parent']
# C. Playwright basic syntax
## 1. test
* Đơn vị cơ bản để khai báo một test
* import { test } from '@playwright/test';
test('<tên test>', async ({ page }) => {
// Code của test
});
* Ví dụ: import {test} form '@playwright/test';
test('test case name', async ({page}) => {
    code logic
});
## 2. step 
* Đơn vị nhỏ hơn test, để khai báo từng step của test case
* Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.
* await test.step('Tên step', async () => {
// Code here
});
## 3. Basic actions
### 3.1. Navigate
* await page.goto('https://pw-practice.playwrightvn.com/');
### 3.2. Click
* Single click: 
await page.locator("//button").click();
* Double click:
await page.locator("//button").dblclick();
* Click chuột phải:
page.locator("//button").click({
button: 'right'
})
* Click chuột kèm bấm phím khác:
page.locator("").click({
modifiers: ['Shift'],
})
### 3.3. Input
#### 3.3.1. Fill
* Giống việc bạn paste content vào một ô input (1 cụm string)
* page.locator("//input").fill('Playwright Viet Nam');
#### 3.3.2. pressSequentially
* Giống việc bạn gõ từng chữ cái vào ô input
* page.locator("//input").pressSequentially('Playwright
Viet Nam', {
delay: 100,
});
### 3.4. Radio/checkbox
* Lấy giá trị hiện tại đang là check hay không:
* Format: const isChecked =
page.locator("//input").isChecked();
* Check/ uncheck:
* Format: page.locator("//input").check();
page.locator("//input").setChecked(false);
### 3.5. Select option
### 3.6. Set Input File