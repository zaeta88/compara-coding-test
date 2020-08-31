import { Product } from './product';

export class SpecialFullCoverageProduct extends Product {
  public name = 'Special Full Coverage';
  public operation = '+=';

  updatePrice() {
    this.sellIn -= this.SELL_IN_DECREASE;
    switch (true) {
    case (this.sellIn <= 5):
      this.updatePriceBy(3);
      break;
    case (this.sellIn <= 10):
      this.updatePriceBy(2);
      break;
    default:
      this.updatePriceBy(1);
      break;
    }

    this.checkPriceLimits();
  }
}