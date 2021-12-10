import { IFindManyProduct } from '@interfaces/IProduct';
import { Product } from '@models/product';

export class FindManyProduct {
  constructor(
    private readonly repository: IFindManyProduct
  ) { }
  async execute(page: string): Promise<Product[] | Error> {
    if (!page) page = '0';

    const prod = await this.repository.findMany(Number(page));
    return prod;
  }
}
