import { Product } from './product'

export class CarInsurance {
  products: Array<Product> = []

  constructor(products) {
    this.products = products
  }
}