import { Product } from './product';

export class megaCoverageProduct extends Product {
  PRICE = 80
  public name: String = 'Mega Coverage';
  public price: number = this.PRICE;

  updatePrice() {
  }
}