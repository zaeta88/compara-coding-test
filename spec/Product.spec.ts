import { Product } from '../src/Product';
import { expect } from 'chai';

describe('product', () => {
  it('should initialize a Product of name Full Coverage', () => {
    const product = new Product('Full Coverage', 20, 80);
    expect(product.name).to.equal('Full Coverage');
    expect(product.sellIn).to.equal(20);
    expect(product.price).to.equal(80);
  })
})
