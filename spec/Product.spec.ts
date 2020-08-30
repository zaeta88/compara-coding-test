import { Product } from '../src/product';
import { expect } from 'chai';

describe('product', () => {
  it('should initialize a Product of name Product Test', () => {
    const product = new Product('Product Test', 20, 80);
    expect(product.name).to.equal('Product Test');
    expect(product.sellIn).to.equal(20);
    expect(product.price).to.equal(80);
  });

  describe('updatePrice', () => {
    it('should decrease price by 2 if the sell in is negative', () => {
      const product = new Product('Product Test', -1, 4);
      product.updatePrice();
      expect(product.price).to.equal(2);
    })

    it('should decrease price by 1 if the sell in is not negative', () => {
      const product = new Product('Product Test', 1, 4);
      product.updatePrice();
      expect(product.price).to.equal(3);
    })

    it('should reset the price to 0 if the price is negative', () => {
      const product = new Product('Product Test', -1, 1);
      product.updatePrice();
      expect(product.price).to.equal(0);
    })

    it('should set the max price if the price is higher than the max price', () => {
      const product = new Product('Product Test', 1, 52);
      product.updatePrice();
      expect(product.price).to.equal(50);
    })
  })

  describe('resetNegativePrice', () => {
    it('should reset price to 0', () => {
      const product = new Product('Product Test', 0, -1);
      product.resetNegativePrice();
      expect(product.price).to.equal(0);
    })
  })

  describe('updatePriceBy', () => {
    it('should increase price to 2', () => {
      const product = new Product('Product Test', 0, 1);
      product.operation = '+=';
      product.updatePriceBy(1);
      expect(product.price).to.equal(2);
    })

    it('should decrease price to 1', () => {
      const product = new Product('Product Test', 0, 2);
      product.updatePriceBy(1);
      expect(product.price).to.equal(1);
    })

    it('should decrease price to 0', () => {
      const product = new Product('Product Test', 0, 2);
      product.updatePriceBy(2);
      expect(product.price).to.equal(0);
    })
  })

  describe('reachMaxPrice', () => {
    it('should set the price to 50 ', () => {
      const product = new Product('Product Test', 0, 1);
      product.reachMaxPrice();
      expect(product.price).to.equal(50);
    })
  })
})
