import { SpecialFullCoverageProduct } from '../src/specialFullCoverageProduct';
import { expect } from 'chai';

describe('SpecialFullCoverageProduct', () => {
  it('should initialize a Product of name Special Full Coverage', () => {
    const product = new SpecialFullCoverageProduct('Special Full Coverage', 9, 20);
    expect(product.name).to.equal('Special Full Coverage');
    expect(product.sellIn).to.equal(9);
    expect(product.price).to.equal(20);
  });

  describe('updatePrice', () => {
    it('should increase by 1 when sell in is above 10', () => {
      const product = new SpecialFullCoverageProduct('Special Full Coverage', 12, 20);
      product.updatePrice();
      expect(product.price).to.equal(21);
    })

    it('should increase by 2 when sell in is between 10 and 5', () => {
      const product = new SpecialFullCoverageProduct('Special Full Coverage', 9, 20);
      product.updatePrice();
      expect(product.price).to.equal(22);
    })

    it('should increase by 3 when sell in is between 0 and 5', () => {
      const product = new SpecialFullCoverageProduct('Special Full Coverage', 4, 20);
      product.updatePrice();
      expect(product.price).to.equal(23);
    })
  })
})
