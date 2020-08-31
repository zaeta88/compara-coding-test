import { MegaCoverageProduct } from '../src/megaCoverageProduct';
import { expect } from 'chai';

describe('MegaCoverageProduct', () => {
  it('should initialize a Product of name Mega Coverage', () => {
    const product = new MegaCoverageProduct('Mega Coverage', 20, 80);
    expect(product.name).to.equal('Mega Coverage');
    expect(product.sellIn).to.equal(20);
    expect(product.price).to.equal(80);
  });

  describe('updatePrice', () => {
    it('should remain the same', () => {
      const product = new MegaCoverageProduct('Mega Coverage', 20, 80);
      product.updatePrice();
      expect(product.price).to.equal(80);
    })
  })
})
