import Sale from '../../../../../domain/sales/Sale';
import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';

export default interface ISaleFactory {
  create(date: Date, customer: Customer, employee: Employee, product: Product, quantity: number): Sale;
}
