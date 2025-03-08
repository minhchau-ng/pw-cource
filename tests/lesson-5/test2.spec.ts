import {test} from '@playwright/test';
test ('Thêm sản phẩm vào giỏ hàng', async({page}) => {
    await page.goto('https://material.playwrightvn.com/');
    // Truy cập trang web
    await page.locator("//a[contains(text(), 'Bài học 2: Product page')]"). click();
    for (let i = 0; i < 2; i++) {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='1']"). click();
    }
    for (let i = 0; i < 3; i++) {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='2']"). click();
    }
    for (let i = 0; i <1; i++) {
    await page.locator("//button[@class='add-to-cart' and @data-product-id='3']"). click();
    }
});