import { Page } from 'puppeteer';
export async function getProductValues (page: Page, selector: string) {
  try {
    const result = await page.evaluate((selector) => {
      const texts = []
      const elements: any = document.querySelectorAll(selector)
      for (let element of elements) {
        let text = element.innerText as string
        texts.push(text)
      }
      return texts.join(',')
    }, selector)
    return result
  } catch (error) {
    console.log(error)
  }
}
