import { test, expect } from '@playwright/test';


test('login', async ({ page }) => {
  const password : any  = 1234;

  await page.goto('https://ceo.hunet.co.kr/');
  await page.getByRole('link', { name: '로그인' }).click();
  await page.getByPlaceholder('아이디').click();
  await page.getByPlaceholder('아이디').fill('hunet2022046');
  await page.getByPlaceholder('아이디').press('Tab');
  await page.getByPlaceholder('비밀번호').click();
  await page.getByPlaceholder('비밀번호').fill(password);
  await page.getByRole('button', { name: '로그인' }).click();
  await expect(page.getByRole('banner')).toContainText('Basic');


});



test('logintest', async ({ page }) => {
  const password: string = 'rlaxowls1!';

  await page.goto('https://ceo.hunet.co.kr/');
  await page.getByRole('link', { name: '로그인' }).click();
  await page.getByPlaceholder('아이디').click();
  await page.getByPlaceholder('아이디').fill('hunet2022046');
  await page.getByPlaceholder('아이디').press('Tab');
  await page.getByPlaceholder('비밀번호').click();
  await page.getByPlaceholder('비밀번호').fill(password);
  await page.getByRole('button', { name: '로그인' }).click();
  await expect(page.getByRole('banner')).toContainText('Basic');
});