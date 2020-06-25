import * as mockEntities from '../../../../../../tools/mockEntities';
import SaleRepositoryFacade from './SaleRepositoryFacade';
import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';
import Sale from '../../../../../domain/sales/Sale';

const customer: Customer = mockEntities.customers[2];
const employee: Employee = mockEntities.employees[2];
const product: Product = mockEntities.products[2];

const facade: SaleRepositoryFacade = new SaleRepositoryFacade(
  mockEntities.customerRepository,
  mockEntities.employeeRepository,
  mockEntities.productRepository,
  mockEntities.saleRepository
);

describe('SaleRepositoryFacade', () => {
  it('getCustomer should return a Customer object', () => {
    const id: number = 2;
    const result: Customer = facade.getCustomer(id);

    expect.assertions(1);
    expect(result).toBeInstanceOf(Customer);
  });

  it('getEmployee should return an Employee object', () => {
    const id: number = 2;
    const result: Employee = facade.getEmployee(id);

    expect.assertions(1);
    expect(result).toBeInstanceOf(Employee);
  });

  it('getProduct should return a Product object', () => {
    const id: number = 2;
    const result: Product = facade.getProduct(id);

    expect.assertions(1);
    expect(result).toBeInstanceOf(Product);
  });

  it('getSale should return a Sale object', () => {
    const sale: Sale = mockEntities.sales[2];
    facade.addSale(sale);

    expect.assertions(1);
    expect(mockEntities.saleRepository.add).toHaveBeenCalled();
  });
});
