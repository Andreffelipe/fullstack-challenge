import { Page } from 'puppeteer';
import { logger } from '../logs';

export async function getLinks (page: Page) {
  try {
    const result = await page.evaluate(() => {
      let objeto: { links: string[] } = {
        links: []
      }
      const elements: any = document.querySelectorAll('.search_results li a');
      for (let element of elements) {
        let href = element.href as string
        objeto.links.push(href)
      }
      return objeto;
    })
    return result;
  } catch (error) {
    logger.error(`GETLINKS : ${error}`, { color: 'red' })
    console.log(error)
    return { links: [] }
  }
}
