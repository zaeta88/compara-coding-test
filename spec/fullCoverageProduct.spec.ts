import { fullCoverageProduct } from '../src/fullCoverageProduct';
import { expect } from 'chai';

describe('fullCoverageProduct', () => {
  it('should initialize a Product of name Full Coverage', () => {
    const product = new fullCoverageProduct('Full Coverage', 20, 80);
    expect(product.name).to.equal('Full Coverage');
    expect(product.sellIn).to.equal(20);
    expect(product.price).to.equal(80);
  });

  describe('updatePrice', () => {
    it('should increase price by 1', () => {
      const product = new fullCoverageProduct('Full Coverage', -1, 4);
      product.updatePrice();
      expect(product.price).to.equal(5);
    })
  })
})
