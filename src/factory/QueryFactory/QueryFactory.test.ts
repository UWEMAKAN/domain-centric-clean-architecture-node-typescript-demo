import { createConnection } from 'typeorm';
import QueryFactory from './QueryFactory';
import RepositoryFactory from '../RepositoryFactory/RepositoryFactory';
import GetCustomersListQuery from '../../application/customers/queries/GetCustomersListQuery';
import GetEmployeesListQuery from '../../application/employees/queries/GetEmployeesListQuery';
import GetProductsListQuery from '../../application/products/queries/GetProductsListQuery';
import GetSalesListQuery from '../../application/sales/queries/getSalesList/GetSalesListQuery';
import GetSaleDetailQuery from '../../application/sales/queries/getSaleDetail/GetSaleDetailQuery';

describe('QueryFactory', () => {
  it('should create and return a QueryFactory object', () => {
    const repositoryFactory = new RepositoryFactory(createConnection, 'test');
    const factory = new QueryFactory(repositoryFactory);
    expect.assertions(2);
    expect(factory).toBeInstanceOf(QueryFactory);
    expect(factory).toMatchObject({
      getCustomersListQuery: expect.any(GetCustomersListQuery),
      getEmployeesListQuery: expect.any(GetEmployeesListQuery),
      getProductsListQuery: expect.any(GetProductsListQuery),
      getSalesListQuery: expect.any(GetSalesListQuery),
      getSaleDetailQuery: expect.any(GetSaleDetailQuery)
    });
  });
});
