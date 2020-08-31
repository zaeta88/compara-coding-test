import { Product } from './product';

export class SuperSaleProduct extends Product {
  public name = 'Super Sale';

  updatePrice() {
    this.sellIn -= this.SELL_IN_DECREASE;
    this.updatePriceBy(2);

    this.checkPriceLimits();
  }
}