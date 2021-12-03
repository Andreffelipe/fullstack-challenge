import puppeteer from 'puppeteer';
import config from '../config/config.json';
import { updateConfig } from '../utils';
import { getCurrentPagePlusOne } from './getCurrentPagePlusOne';
import { getLinks } from './getLinks';
import { getProducts } from './getProducts';

const webscraping = async () => {
  const products = []
  const browser = await puppeteer.launch({
    timeout: 50000,
    headless: false
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
    products.push(product)
  }
  await browser.close();
};

export { webscraping }


