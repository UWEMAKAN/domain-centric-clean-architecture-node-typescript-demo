import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';
import Sale from '../../../../../domain/sales/Sale';

export default interface ISaleRepositoryFacade {
  getCustomer(customerId: number): Customer;
  getEmployee(employeeId: number): Employee;
  getProduct(productId: number): Product;
  addSale(sale: Sale): void;
}
