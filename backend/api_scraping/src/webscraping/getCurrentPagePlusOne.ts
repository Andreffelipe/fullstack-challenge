import { Page } from 'puppeteer';
export async function getCurrentPagePlusOne (page: Page) {
  try {
    const result = await page.evaluate(() => {
      const element: any = document.querySelector('.current a')
      return element.text
    })
    return result;
  } catch (error) {
    console.log(error)
    return ""
  }
}
