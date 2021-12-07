import { Page } from 'puppeteer';
import { logger } from '../logs';
export async function getProductValues(page: Page, selector: string) {
  try {
    const result = await page.evaluate((selector) => {
      const texts = []
      const elements: any = document.querySelectorAll(selector)
      for (let element of elements) {
        let text = element.innerText as string
        texts.push(text)
      }
      return texts
    }, selector)
    return result
  } catch (error) {
    logger.error(`GETPRODUCTVALUES : ${error}`, { color: 'red' })
    console.log(error)
  }
}
