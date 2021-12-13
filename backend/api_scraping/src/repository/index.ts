import { PrismaClient } from '@prisma/client'
import { logger } from "../logs";
import { timeToRequest } from '../config/config.json'

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

export const saveProduct = async ({
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
    const product = await prisma.product.create({
      data: {
        code: code,
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
    console.log(product.product_name)
  } catch (error) {
    logger.error(`SAVEPRODUCT : ${error}`, { color: 'red' })
  }
}
