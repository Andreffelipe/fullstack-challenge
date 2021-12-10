import { webscraping } from "./webscraping";
import { PrismaClient } from '@prisma/client'
import { logger } from "./logs";
import { timeToRequest } from './config/config.json'

const prisma = new PrismaClient()

type Props = {
  code: number;
  barcode: string;
  url: string;
  product_name: string;
  quantity: string;
  categories: string;
  packaging: string;
  brands: string;
  image_url: string;
}

const saveProduct = async ({
  code,
  barcode,
  url,
  product_name,
  quantity,
  categories,
  packaging,
  brands,
  image_url }: Props): Promise<void> => {
  try {
    await prisma.product.create({
      data: {
        code,
        barcode,
        url,
        product_name,
        quantity,
        categories,
        packaging,
        brands,
        image_url,
      }
    })
  } catch (error) {
    logger.error(`SAVEPRODUCT : ${error}`, { color: 'red' })
  }
}

const bootstrap = async () => {
  const products = await webscraping()

  if (products instanceof Error) return

  for await (let product of products) {
    const { code, barcode, url, product_name, quantity, categories, packaging, brands, image_url } = product
    await saveProduct({ code, barcode, url, product_name, quantity, categories, packaging, brands, image_url })
  }
}

(async () => {
  setInterval(() => bootstrap(), timeToRequest)
})()
