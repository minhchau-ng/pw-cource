import { test, expect } from '@playwright/test';

test('Thêm và tìm kiếm Personal Notes', async ({ page }) => {
  // Truy cập trang web
  await page.goto('https://material.playwrightvn.com/');

  // Click vào “Bài học 4: Personal notes”
  await page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]").click();

  // Danh sách tiêu đề và nội dung giả định từ báo VnExpress Khoa học
  const notes = [
    { title: "Bí ẩn lỗ đen", content: "Lỗ đen là vùng không gian có lực hấp dẫn cực lớn." },
    { title: "AI trong y tế", content: "Trí tuệ nhân tạo hỗ trợ bác sĩ trong chẩn đoán bệnh." },
    { title: "Tàu vũ trụ mới", content: "NASA chuẩn bị phóng tàu thăm dò sao Hỏa." },
    { title: "Biến đổi khí hậu", content: "Nhiệt độ toàn cầu tăng gây hậu quả nghiêm trọng." },
    { title: "Công nghệ 6G", content: "Thế hệ mạng tiếp theo hứa hẹn tốc độ siêu nhanh." },
    { title: "Lượng tử và vũ trụ", content: "Lý thuyết lượng tử có thể giải thích vũ trụ." },
    { title: "Khủng long tuyệt chủng", content: "Tiểu hành tinh va chạm Trái Đất cách đây 65 triệu năm." },
    { title: "Vaccine mRNA", content: "Công nghệ vaccine giúp chống lại virus hiệu quả." },
    { title: "Sống trên sao Hỏa", content: "NASA nghiên cứu điều kiện sống trên hành tinh đỏ." },
    { title: "Robot AI", content: "Robot thông minh đang thay đổi cuộc sống con người." }
  ];

  // Thêm 10 note vào danh sách
  for (const note of notes) {
    await page.locator("//input[@id='note-title']").fill(note.title);
    await page.locator("//textarea[@id='note-content']").fill(note.content);
    await page.locator("//button[@id='add-note']").click();
  }
});