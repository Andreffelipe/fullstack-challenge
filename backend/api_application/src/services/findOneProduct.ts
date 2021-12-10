import { IFindOneProduct } from '@interfaces/IProduct';
import { Product } from '@models/product';

export class FindOneProduct {
  constructor(
    private readonly repository: IFindOneProduct
  ) { }
  async execute(productId: string): Promise<Product | Error> {
    if (!productId) {
      return new Error('productId is required');
    }
    const prod = await this.repository.findOne(productId);

    return prod;
  }
}
