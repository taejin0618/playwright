import { test, expect } from '@playwright/test';
import {MyDamPage} from "./MyDamPage";
import { PlaywrightDevPage } from './POM/playwright-dev-page';


test('test', async ({ page }) => {

    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
});

test('should show Page Object Model article', async ({ page }) => {
    await page.goto('https://front.hunet.name/study-html/dist/mydam/pages/mydam.html');
    await page.getByRole('link', {name: '학습목차'}).click();

    await page.getByRole('link', {name: '외부링크↗'}).click();
    await page.getByRole('link', {name: '이동하기'}).click();
});