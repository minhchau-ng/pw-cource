import {test} from '@playwright/test';
test ('Thêm và xóa todolist', async({page}) => {
    // Truy cập trang web
  await page.goto('https://material.playwrightvn.com/');
  // Click vào “Bài học 3: Todo page”
  await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
  // Thêm 100 todo items
  for (let i = 0; i <= 100; i++) {
    await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
    await page.locator("//button[@id='add-task']").click();
}
    // Xóa các todo có số lẻ
  page.on('dialog', async dialog => {
    await dialog.accept()
  });
  for (let i = 1; i <= 100; i += 2) {
    await page.locator(`//button[@id='todo-${i}-delete']`).click();
  }
});
