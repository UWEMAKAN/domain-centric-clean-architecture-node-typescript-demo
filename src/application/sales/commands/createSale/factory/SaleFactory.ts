import ISaleFactory from './ISaleFactory';
import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';
import Sale from '../../../../../domain/sales/Sale';

class SaleFactory implements ISaleFactory {
  public create(date: Date, customer: Customer, employee: Employee, product: Product, quantity: number) {
    const sale: Sale = new Sale();
    sale.Date = date;
    sale.Customer = customer;
    sale.Employee = employee;
    sale.Product = product;
    sale.UnitPrice = product.Price;
    sale.Quantity = quantity;
    return sale;
  }
}

export default SaleFactory;
