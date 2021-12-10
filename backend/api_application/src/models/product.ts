export class Product {
  id?: string;
  code: number;
  barcode: string;
  status: 'draft' | 'imported';
  imported_at: Date;
  url: string;
  product_name: string;
  quantity: string;
  categories: string[];
  packaging: string[];
  brands: string[];
  image_url: string;
  constructor(props: Product) {
    Object.assign(this, props);
  }
}
