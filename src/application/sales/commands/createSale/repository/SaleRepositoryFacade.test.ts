import * as mockEntities from '../../../../../../tools/mockEntities';
import SaleRepositoryFacade from './SaleRepositoryFacade';
import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';
import Sale from '../../../../../domain/sales/Sale';

const facade: SaleRepositoryFacade = new SaleRepositoryFacade(
  mockEntities.customerRepository,
  mockEntities.employeeRepository,
  mockEntities.productRepository,
  mockEntities.saleRepository
);

describe('SaleRepositoryFacade', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('getCustomer should return a Customer object', async () => {
    const id: number = 2;
    const result: Customer = await facade.getCustomer(id);
    expect.assertions(1);
    expect(result).toBeInstanceOf(Customer);
  });

  it('getEmployee should return an Employee object', async () => {
    const id: number = 2;
    const result: Employee = await facade.getEmployee(id);
    expect.assertions(1);
    expect(result).toBeInstanceOf(Employee);
  });

  it('getProduct should return a Product object', async () => {
    const id: number = 2;
    const result: Product = await facade.getProduct(id);
    expect.assertions(1);
    expect(result).toBeInstanceOf(Product);
  });

  it('getSale should return a Sale object', async () => {
    const sale: Sale = mockEntities.sales[2];
    await facade.addSale(sale);
    expect.assertions(1);
    expect(mockEntities.saleRepository.add).toHaveBeenCalled();
  });
});
