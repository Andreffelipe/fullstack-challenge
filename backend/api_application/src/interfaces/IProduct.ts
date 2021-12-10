import { Product } from '@models/product';

export interface IProduct extends IFindOneProduct, IFindManyProduct { }

export interface IFindOneProduct {
  findOne(id: string): Promise<Product>;
}
export interface IFindManyProduct {
  findMany(page: number): Promise<Product[]>
}
