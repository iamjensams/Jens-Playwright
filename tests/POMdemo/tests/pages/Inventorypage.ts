// pages/InventoryPage.ts
import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productTitles = '.inventory_item_name';

  constructor(page: Page) {
    this.page = page;
  }

  async getProductNames(): Promise<string[]> {
    return await this.page.$$eval(this.productTitles, items =>
      items.map(item => item.textContent?.trim() || '')
    );
  }
}
