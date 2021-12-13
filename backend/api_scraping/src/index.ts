import { saveProduct } from "./repository";
import { webscraping } from "./webscraping";

const bootstrap = async () => {
  const products = await webscraping()

  if (products instanceof Error) return

  for await (let product of products) {
    const { code, barcode, url, product_name, quantity, categories, packaging, brands, image_url } = product
    let cod = Number(code)
    await saveProduct({ code: cod, barcode, url, product_name, quantity, categories, packaging, brands, image_url })
  }
}

(async () => {
  //setInterval(() => bootstrap(), timeToRequest)
  bootstrap()
})()

