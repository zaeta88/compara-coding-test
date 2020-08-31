import { Product } from '../src/product';
import { CarInsurance } from '../src/carInsurance';
import { expect } from 'chai';

describe('CarInsurance', () => {
  it('should initialize a CarInsurance of two products', () => {
    const carInsurance = new CarInsurance([new Product('Product Test 1', 1, 2), new Product('Product Test 1', 3, 4)]);
    expect(carInsurance.products.length).to.equal(2);
  });
})
