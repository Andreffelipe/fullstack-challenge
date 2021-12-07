import { Page } from 'puppeteer';
import { logger } from '../logs';
import { getProductValues } from './getProductDescription';

export async function getProducts(page: Page) {

  try {
    const result = await page.evaluate(() => {
      const product: any = {}
      const code: any = document.querySelector("#barcode")
      const barcode: any = document.querySelector("#barcode_paragraph")
      const product_name: any = document.querySelector("[property=\"food:name\"]")
      const quantity: any = document.querySelector("#field_quantity_value")
      const image_url: any = document.querySelector(".th .show-for-xlarge-up")
      product.code = code.innerText;
      product.barcode = barcode.innerText.replace('Barcode: ', '')
      product.url = document.URL
      product.product_name = product_name.innerText
      product.quantity = quantity.innerText
      product.image_url = image_url.src
      return product
    })
    result.categories = await getProductValues(page, "#field_categories_value a")
    result.packaging = await getProductValues(page, "#field_packaging_value a")
    result.brands = await getProductValues(page, "#field_brands_value a")
    return result
  } catch (error) {
    logger.error(`GETPRODUCTS : ${error}`, { color: 'red' })
    console.log(error)
    return {}
  }
}
