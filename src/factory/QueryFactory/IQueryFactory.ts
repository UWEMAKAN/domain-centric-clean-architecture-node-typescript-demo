import IGetCustomersListQuery from '../../application/customers/queries/IGetCustomersListQuery';
import IGetEmployeesListQuery from '../../application/employees/queries/IGetEmployeesListQuery';
import IGetProductsListQuery from '../../application/products/queries/IGetProductsListQuery';
import IGetSalesListQuery from '../../application/sales/queries/getSalesList/IGetSalesListQuery';
import IGetSaleDetailQuery from '../../application/sales/queries/getSaleDetail/IGetSaleDetailQuery';

export default interface IQueryFactory {
  getCustomersListQuery: IGetCustomersListQuery,
  getEmployeesListQuery: IGetEmployeesListQuery,
  getProductsListQuery: IGetProductsListQuery,
  getSalesListQuery: IGetSalesListQuery,
  getSaleDetailQuery: IGetSaleDetailQuery
}
