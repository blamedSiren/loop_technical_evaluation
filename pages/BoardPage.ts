import { Page, Locator, expect } from '@playwright/test';

export class BoardPage {
  constructor(private page: Page) {}

  async openProject(name: string) {
    await this.page.getByRole('button', {name: new RegExp(name, 'i')}).first().click();
  }

  private header(columnName: string): Locator {
    const escaped = columnName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return this.page.getByRole('heading', {name: new RegExp(`^${escaped}\\s*\\(?\\d*\\)?$`) });
  }

  column(columnName: string): Locator {
    return this.header(columnName).locator('xpath=ancestor::div[.//h3 or .//h4][1]');
  }

  async verifyTask(columnName: string, task: string, tags: string[]) {
    const col = this.column(columnName);
    const title = col.getByText(task, {exact: true});
    await expect(title, `"${task}" should be in "${columnName}"`).toBeVisible();

    const card = title.locator('xpath=ancestor::div[.//span or .//div][1]');
    for (const tag of tags) {
      await expect(card.getByText(tag, { exact: true }), `tag "${tag}" on "${task}"`).toBeVisible();
    }
  }
}