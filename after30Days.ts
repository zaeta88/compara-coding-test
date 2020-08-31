import { Product } from './src/product';
import { FullCoverageProduct } from './src/fullCoverageProduct';
import { MegaCoverageProduct } from './src/megaCoverageProduct';
import { SpecialFullCoverageProduct } from './src/specialFullCoverageProduct';
import { SuperSaleProduct } from './src/superSaleProduct';
import { CarInsurance } from './src/carInsurance';

let products = [
  new Product('Medium Coverage', 10, 20),
  new FullCoverageProduct('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new MegaCoverageProduct('Mega Coverage', 0, 80),
  new MegaCoverageProduct('Mega Coverage', -1, 80),
  new SpecialFullCoverageProduct('Special Full Coverage', 15, 20),
  new SpecialFullCoverageProduct('Special Full Coverage', 10, 49),
  new SpecialFullCoverageProduct('Special Full Coverage', 5, 49),
  new SuperSaleProduct('Super Sale', 3, 6)
];

const carInsurance = new CarInsurance(products)

const productPrinter = (product) => {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

console.log('OMGHAI!');
console.log('------- day 0 -------');
console.log('name, sellIn, price');
carInsurance.products.forEach((product) => {
  productPrinter(product)
});


for (let i = 1; i <= 30; i += 1) {
  console.log('')
  console.log(`------- day ${i} -------`)
  console.log('name, sellIn, price')
  carInsurance.products.forEach((product) => {
    product.updatePrice();
    productPrinter(product);
  })
}
