export class Product {
  public name: String;
  public sellIn: any;
  public price: any;
  public num: number;
  public operation: String = '-=';

  SELL_IN_DECREASE = 1;
  PRICE_DECREASE = 1;
  PRICE_INCREASE = 1;
  PRICE_MAX = 50

  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    this.sellIn -= this.SELL_IN_DECREASE;
    this.sellIn < 0 && this.operation === '-=' ? this.updatePriceBy(2) : this.updatePriceBy(1);

    this.checkPriceLimits();
  }

  checkPriceLimits() {
    switch (true) {
    case (this.price < 0):
      this.resetNegativePrice();
      break;
    case (this.price > this.PRICE_MAX):
      this.reachMaxPrice();
      break;
    } 
  }

  updatePriceBy(number) {
    eval(`this.price${this.operation}${number}`.toString())
  }

  resetNegativePrice() {
    this.price = 0;
  }

  reachMaxPrice() {
    this.price = this.PRICE_MAX;
  }
}