import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';
import Sale from '../../../../../domain/sales/Sale';

export default interface ISaleRepositoryFacade {
  getCustomer(customerId: number): Promise<Customer>;
  getEmployee(employeeId: number): Promise<Employee>;
  getProduct(productId: number): Promise<Product>;
  addSale(sale: Sale): Promise<void>;
}
