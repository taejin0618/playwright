import { Page } from 'playwright';
import {test} from "@playwright/test";

export class MyDamPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // 버튼을 selector를 통해 접근합니다.
  async button(selector: string) {
    return await this.page.$(selector);
  }

  // input 필드를 selector를 통해 접근합니다.
  async inputField(selector: string) {
    return await this.page.$(selector);
  }

  // 요소의 텍스트를 selector를 통해 가져옵니다.
  async getText(selector: string) {
    return await this.page.$eval(selector, element => element.textContent);
  }

  // 페이지 상의 다른 요소와의 상호작용을 위한 메서드들
  // ...
}

