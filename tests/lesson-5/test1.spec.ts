import {test} from '@playwright/test';
test('Fill informtion and register', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    // Truy cập trang web
    await page.locator("//a[contains(text(), 'Bài học 1: Register Page')]").click();
    // Click vào “Bài học 1: Register Page”
    await page.locator("//input[@id='username']").fill("Nguyen Minh Chau")
    await page.locator("//input[@id='email']").fill('chaunm.nevents@gmail.com')
    await page.locator("//select[@id='interests']").selectOption('Music');
    await page.locator("//select[@id='country']").selectOption('United States');
    await page.locator("//input[@id='dob']").evaluate(el => el.value = '05/25/2003');
    await page.locator("//input[@id='profile']").setInputFiles("D:/pw-course/tests/lesson-4/03-foreach.js");
    await page.locator("//textarea[@id='bio']").fill('I love automation testing with Playwright.');
    await page.locator("//input[@id='rating']").fill('5');
    await page.locator("//input[@id='favcolor']").fill('#ff0000');
    await page.locator("//input[@id='newsletter']").check();
    await page.locator("//input[@id='toggleOption']").check();
    // Điền thông tin vào các ô input
    await page.locator("//button[contains(text(), 'Register')]").click();
    // Click nút đăng ký
})