import { SuperSaleProduct } from '../src/superSaleProduct';
import { expect } from 'chai';

describe('SuperSaleProduct', () => {
  it('should initialize a Product of name Super Sale', () => {
    const product = new SuperSaleProduct('Super Sale', 20, 80);
    expect(product.name).to.equal('Super Sale');
    expect(product.sellIn).to.equal(20);
    expect(product.price).to.equal(80);
  });

  describe('updatePrice', () => {
    it('should decrease price by 2', () => {
      const product = new SuperSaleProduct('Mega Coverage', 2, 20);
      product.updatePrice();
      expect(product.price).to.equal(18);
    })
  })
})
