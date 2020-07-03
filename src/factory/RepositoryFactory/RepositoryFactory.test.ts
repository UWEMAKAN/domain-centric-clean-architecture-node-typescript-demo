import { createConnection } from 'typeorm';
import RepositoryFactory from './RepositoryFactory';
import CustomerRepository from '../../persistence/customers/CustomerRepository';
import EmployeeRepository from '../../persistence/employees/EmployeeRepository';
import ProductRepository from '../../persistence/products/ProductRepository';
import SaleRepository from '../../persistence/sales/SaleRepository';

describe('RepositoryFactory', () => {
  it('should create and return a RepositoryFactory object', () => {
    const factory = new RepositoryFactory(createConnection, 'test');
    expect.assertions(2);
    expect(factory).toBeInstanceOf(RepositoryFactory);
    expect(factory).toMatchObject({
      customerRepository: expect.any(CustomerRepository),
      employeeRepository: expect.any(EmployeeRepository),
      productRepository: expect.any(ProductRepository),
      saleRepository: expect.any(SaleRepository)
    });
  });
});
