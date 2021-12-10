import puppeteer from 'puppeteer';
import config from '../config/config.json';
import { logger } from '../logs';
import { Product } from '../model/product';
import { updateConfig } from '../utils';
import { getCurrentPagePlusOne } from './getCurrentPagePlusOne';
import { getLinks } from './getLinks';
import { getProducts } from './getProducts';

const webscraping = async (): Promise<Product[] | Error> => {
  try {
    const products: Product[] = []
    const browser = await puppeteer.launch({
      timeout: 50000,
      headless: true
    });

    const page = await browser.newPage();
    page.setDefaultTimeout(100000)
    await page.goto(config.url + config.page);
    const result = await getLinks(page);
    const result1 = await getCurrentPagePlusOne(page);
    updateConfig(result1);
    for await (let link of result.links) {
      await page.goto(link)
      let product = await getProducts(page)
      console.log(product)
      products.push(new Product({
        code: product.code,
        barcode: product.barcode,
        url: product.url,
        product_name: product.product_name,
        quantity: product.quantity,
        categories: product.categories,
        packaging: product.packaging,
        brands: product.brands,
        image_url: product.image_url,
      }))
    }
    await browser.close();
    return products
  } catch (error) {
    logger.error(`WEBSCRAPING : ${error}`, { color: 'red' })
    return new Error(error as string)
  };
}

export { webscraping }


