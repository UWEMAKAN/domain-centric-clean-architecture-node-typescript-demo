import SaleFactory from './SaleFactory';
import * as mockEntities from '../../../../../../tools/mockEntities';
import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';
import Sale from '../../../../../domain/sales/Sale';

const factory: SaleFactory = new SaleFactory();
const customer: Customer = mockEntities.customers[1];
const employee: Employee = mockEntities.employees[1];
const product: Product = mockEntities.products[1];
const quantity = 10;
const price = 225;
const date: Date = new Date();

describe('SaleFactory', () => {
  it('should create a Sale object', () => {
    const sale: Sale = factory.create(date, customer, employee, product, quantity);
    expect.assertions(6);
    expect(sale.Date).toEqual(date);
    expect(sale.Customer).toEqual(customer);
    expect(sale.Employee).toEqual(employee);
    expect(sale.Product).toEqual(product);
    expect(sale.UnitPrice).toEqual(product.Price);
    expect(sale.Quantity).toEqual(quantity);
  });
});
