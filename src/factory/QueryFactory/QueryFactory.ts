import IRepositoryFactory from '../RepositoryFactory/IRepositoryFactory';
import IQueryFactory from './IQueryFactory';
import IGetCustomersListQuery from '../../application/customers/queries/IGetCustomersListQuery';
import IGetEmployeesListQuery from '../../application/employees/queries/IGetEmployeesListQuery';
import IGetProductsListQuery from '../../application/products/queries/IGetProductsListQuery';
import IGetSalesListQuery from '../../application/sales/queries/getSalesList/IGetSalesListQuery';
import IGetSaleDetailQuery from '../../application/sales/queries/getSaleDetail/IGetSaleDetailQuery';
import GetCustomersListQuery from '../../application/customers/queries/GetCustomersListQuery';
import GetEmployeesListQuery from '../../application/employees/queries/GetEmployeesListQuery';
import GetProductsListQuery from '../../application/products/queries/GetProductsListQuery';
import GetSalesListQuery from '../../application/sales/queries/getSalesList/GetSalesListQuery';
import GetSaleDetailQuery from '../../application/sales/queries/getSaleDetail/GetSaleDetailQuery';

class QueryFactory implements IQueryFactory {
  public readonly getCustomersListQuery: IGetCustomersListQuery;
  public readonly getEmployeesListQuery: IGetEmployeesListQuery;
  public readonly getProductsListQuery: IGetProductsListQuery;
  public readonly getSalesListQuery: IGetSalesListQuery;
  public readonly getSaleDetailQuery: IGetSaleDetailQuery;

  constructor(repositoryFactory: IRepositoryFactory) {
    this.getCustomersListQuery = new GetCustomersListQuery(repositoryFactory.customerRepository);
    this.getEmployeesListQuery = new GetEmployeesListQuery(repositoryFactory.employeeRepository);
    this.getProductsListQuery = new GetProductsListQuery(repositoryFactory.productRepository);
    this.getSaleDetailQuery = new GetSaleDetailQuery(repositoryFactory.saleRepository);
    this.getSalesListQuery = new GetSalesListQuery(repositoryFactory.saleRepository);
  }
}

export default QueryFactory;
