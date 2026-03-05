import { test, expect } from '@playwright/test';

test('Додавання 2 + 3 у браузері', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.fill('input[placeholder="Число 1"]', '2');
  await page.fill('input[placeholder="Число 2"]', '3');
  await page.click('button:has-text("+")');

  // 3. Перевірка результату
  const result = page.locator('.result');
  await expect(result).toContainText('Результат: 5');
});