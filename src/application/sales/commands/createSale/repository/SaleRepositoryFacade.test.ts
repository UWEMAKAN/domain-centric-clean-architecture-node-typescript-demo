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
  it('getCustomer should return a Customer object', async (done) => {
    const id: number = 2;
    const result: Customer = await facade.getCustomer(id);

    expect.assertions(1);
    expect(result).toBeInstanceOf(Customer);
    done();
  });

  it('getEmployee should return an Employee object', async (done) => {
    const id: number = 2;
    const result: Employee = await facade.getEmployee(id);

    expect.assertions(1);
    expect(result).toBeInstanceOf(Employee);
    done();
  });

  it('getProduct should return a Product object', async (done) => {
    const id: number = 2;
    const result: Product = await facade.getProduct(id);

    expect.assertions(1);
    expect(result).toBeInstanceOf(Product);
    done();
  });

  it('getSale should return a Sale object', async (done) => {
    const sale: Sale = mockEntities.sales[2];
    await facade.addSale(sale);

    expect.assertions(1);
    expect(mockEntities.saleRepository.add).toHaveBeenCalled();
    done();
  });
});
