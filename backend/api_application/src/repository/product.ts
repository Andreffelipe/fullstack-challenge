import { IProduct } from '@interfaces/IProduct';
import { Product } from '@models/product';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class ProductRepository implements IProduct {
  async findOne(id: string): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: {
        id
      }
    });
    return product;
  }
  async findMany(page: number): Promise<Product[]> {
    if (page != 0) page = page * 9;
    const products = await prisma.product.findMany({
      take: 9,
      skip: page,
      select: {
        id: true,
        code: true,
        barcode: true,
        status: true,
        imported_at: true,
        url: true,
        product_name: true,
        quantity: true,
        categories: true,
        packaging: true,
        brands: true,
        image_url: true,
      }
    });
    return products;
  }
}
