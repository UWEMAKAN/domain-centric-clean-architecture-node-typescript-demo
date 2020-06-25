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
    expect.assertions(7);
    expect(sale).toMatchObject({
      _id: expect.any(Number),
      _quantity: expect.any(Number),
      _totalPrice: expect.any(Number),
      _unitPrice: expect.any(Number),
      _date: expect.any(Date),
      _customer: expect.any(Customer),
      _employee: expect.any(Employee),
      _product: expect.any(Product)
    });
    expect(sale.date).toEqual(date);
    expect(sale.customer).toEqual(customer);
    expect(sale.employee).toEqual(employee);
    expect(sale.product).toEqual(product);
    expect(sale.unitPrice).toEqual(product.price);
    expect(sale.quantity).toEqual(quantity);
  });
});
