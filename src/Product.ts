export class Product {
  public name: String;
  public sellIn: Number;
  public price: Number;

  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}