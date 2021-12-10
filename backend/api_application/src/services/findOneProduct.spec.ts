import { IFindOneProduct } from "@interfaces/IProduct";
import { Product } from "@models/product";
import { FindOneProduct } from "./findOneProduct";

const product: Product[] = [{
  "id": "123456789",
  "code": 3329757002998,
  "status": 'imported',
  "imported_at": new Date(),
  "barcode": "3329757002998 (EAN / EAN-13)",
  "url": "https: //world.openfoodfacts.org/product/3329757002998/pure-via-stevia",
  "product_name": "Pure via stevia - 250g",
  "quantity": "250 g",
  "image_url": "https: //world.openfoodfacts.org/images/products/332/975/700/2998/front_fr.113.400.jpg",
  "categories": [
    "Plant-based foods and beverages"
  ],
  "packaging": [
    "Plastique"
  ],
  "brands": [
    "Pure Via"
  ]
}]

class FakeRepo implements IFindOneProduct {
  async findOne(id: string): Promise<Product> {
    const prod = product.filter((e) => e.id === id)
    return prod[0]
  }
}

const fake = () => {
  const repository = new FakeRepo()
  const find = new FindOneProduct(repository);
  return { find }
}
describe("product search", () => {
  it('should return error for parameter is null', async () => {
    const { find } = fake()
    const result = await find.execute("")
    expect(result).toBeInstanceOf(Error)
  });
  it('should return one product', async () => {
    const { find } = fake()
    const result = await find.execute("123456789") as Product
    expect(result.product_name).toEqual(product[0].product_name)
  });
})
