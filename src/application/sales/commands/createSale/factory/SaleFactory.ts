import ISaleFactory from './ISaleFactory';
import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';
import Sale from '../../../../../domain/sales/Sale';

class SaleFactory implements ISaleFactory {
  public create(date: Date, customer: Customer, employee: Employee, product: Product, quantity: number) {
    const sale: Sale = new Sale();
    sale.date = date;
    sale.customer = customer;
    sale.employee = employee;
    sale.product = product;
    sale.unitPrice = product.price;
    sale.quantity = quantity;
    return sale;
  }
}

export default SaleFactory;
