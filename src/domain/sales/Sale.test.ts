import Customer from '../customers/Customer';
import Employee from '../employees/Employee';
import Product from '../products/Product';
import Sale from './Sale';

const customerId: number = 1;
const customerName: string = 'Kufre';
const customer: Customer = new Customer();

const employeeId: number = 1;
const employeeName: string = 'Daniel';
const employee: Employee = new Employee();

const productId: number = 1;
const productName: string = 'Snickers';
const productPrice: number = 200;
const product: Product = new Product();

const date: Date = new Date();
const id: number = 1;
const quantity: number = 5;
const unitPrice: number = product.Price;

describe('Sale', () => {
  it('should create a sale object that is instance of the Sale class', () => {
    const sale = new Sale();

    expect.assertions(1);
    expect(sale instanceof Sale).toBeTruthy();
  });

  it('should set and get id', () => {
    const sale = new Sale();
    const oldId: number = sale.Id;
    sale.Id = 2;

    expect.assertions(2);
    expect(sale.Id).toEqual(2);
    expect(sale.Id === oldId).toBeFalsy();
  });

  it('should set and get date', () => {
    const sale = new Sale();
    const newDate: Date = new Date();
    const oldDate: Date = sale.Date;
    sale.Date = newDate;

    expect.assertions(2);
    expect(sale.Date).toEqual(newDate);
    expect(sale.Date === oldDate).toBeFalsy();
  });

  it('should set and get customer', () => {
    const sale = new Sale();
    const newCustomer: Customer = new Customer();
    const oldCustomer: Customer = sale.Customer;
    sale.Customer = newCustomer;

    expect.assertions(2);
    expect(sale.Customer).toEqual(newCustomer);
    expect(sale.Customer === oldCustomer).toBeFalsy();
  });

  it('should set and get employee', () => {
    const sale = new Sale();
    const newEmployee: Employee = new Employee();
    const oldEmployee: Employee = sale.Employee;
    sale.Employee = newEmployee;

    expect.assertions(2);
    expect(sale.Employee).toEqual(newEmployee);
    expect(sale.Employee === oldEmployee).toBeFalsy();
  });

  it('should set and get product', () => {
    const sale = new Sale();
    const newProduct: Product = new Product();
    const oldProduct: Product = sale.Product;
    sale.Product = newProduct;

    expect.assertions(2);
    expect(sale.Product).toEqual(newProduct);
    expect(sale.Product === oldProduct).toBeFalsy();
  });

  it('should set and get unitPrice', () => {
    const sale = new Sale();
    const newUnitPrice: number = 300;
    const oldUnitPrice: number = sale.UnitPrice;
    sale.UnitPrice = newUnitPrice;

    expect.assertions(2);
    expect(sale.UnitPrice).toEqual(newUnitPrice);
    expect(sale.UnitPrice === oldUnitPrice).toBeFalsy();
  });

  it('should set and get quantity', () => {
    const sale = new Sale();
    const newQuantity: number = 25;
    const oldQuantity: number = sale.Quantity;
    sale.Quantity = newQuantity;

    expect.assertions(2);
    expect(sale.Quantity).toEqual(newQuantity);
    expect(sale.Quantity === oldQuantity).toBeFalsy();
  });

  it('set unitPrice should recompute totalPrice', () => {
    const sale = new Sale();
    sale.Quantity = 10;
    const newUnitPrice: number = 300;
    const oldTotalPrice: number = sale.TotalPrice;
    sale.UnitPrice = newUnitPrice;

    expect.assertions(1);
    expect(sale.TotalPrice).toEqual(3000);
  });

  it('set quantity should recompute totalPrice', () => {
    const sale = new Sale();
    sale.UnitPrice = 10;
    const newQuantity: number = 25;
    const oldTotalPrice: number = sale.TotalPrice;
    sale.Quantity = newQuantity;

    expect.assertions(1);
    expect(sale.TotalPrice).toEqual(250);
  });
});
