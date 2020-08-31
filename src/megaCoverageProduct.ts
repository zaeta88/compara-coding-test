import { Product } from './product';

export class MegaCoverageProduct extends Product {
  PRICE = 80
  public name = 'Mega Coverage';
  public price: number = this.PRICE;

  updatePrice() {
    return;
  }
}