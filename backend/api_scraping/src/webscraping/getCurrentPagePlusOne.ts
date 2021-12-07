import { Page } from 'puppeteer';
import { logger } from '../logs';
export async function getCurrentPagePlusOne(page: Page) {
  try {
    const result = await page.evaluate(() => {
      const element: any = document.querySelector('.current a')
      return element.text
    })
    return result;
  } catch (error) {
    logger.error(`GETCURRENTPAGE : ${error}`, { color: 'red' })
    console.log(error)
    return ""
  }
}
