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
const unitPrice: number = product.price;

describe('Sale', () => {
  it('should create a sale object that is instance of the Sale class', () => {
    const sale = new Sale();

    expect.assertions(2);
    expect(sale instanceof Sale).toBeTruthy();
    expect(sale).toMatchObject({
      _id: expect.any(Number),
      _quantity: expect.any(Number),
      _totalPrice: expect.any(Number),
      _unitPrice: expect.any(Number),
      _date: expect.any(Date),
      _customer: expect.any(Customer),
      _employee: expect.any(Employee),
      _product: expect.any(Product)
    });
  });

  it('should set and get id', () => {
    const sale = new Sale();
    const oldId: number = sale.id;
    sale.id = 2;

    expect.assertions(2);
    expect(sale.id).toEqual(2);
    expect(sale.id === oldId).toBeFalsy();
  });

  it('should set and get date', () => {
    const sale = new Sale();
    const newDate: Date = new Date();
    const oldDate: Date = sale.date;
    sale.date = newDate;

    expect.assertions(2);
    expect(sale.date).toEqual(newDate);
    expect(sale.date === oldDate).toBeFalsy();
  });

  it('should set and get customer', () => {
    const sale = new Sale();
    const newCustomer: Customer = new Customer();
    const oldCustomer: Customer = sale.customer;
    sale.customer = newCustomer;

    expect.assertions(2);
    expect(sale.customer).toEqual(newCustomer);
    expect(sale.customer === oldCustomer).toBeFalsy();
  });

  it('should set and get employee', () => {
    const sale = new Sale();
    const newEmployee: Employee = new Employee();
    const oldEmployee: Employee = sale.employee;
    sale.employee = newEmployee;

    expect.assertions(2);
    expect(sale.employee).toEqual(newEmployee);
    expect(sale.employee === oldEmployee).toBeFalsy();
  });

  it('should set and get product', () => {
    const sale = new Sale();
    const newProduct: Product = new Product();
    const oldProduct: Product = sale.product;
    sale.product = newProduct;

    expect.assertions(2);
    expect(sale.product).toEqual(newProduct);
    expect(sale.product === oldProduct).toBeFalsy();
  });

  it('should set and get unitPrice', () => {
    const sale = new Sale();
    const newUnitPrice: number = 300;
    const oldUnitPrice: number = sale.unitPrice;
    sale.unitPrice = newUnitPrice;

    expect.assertions(2);
    expect(sale.unitPrice).toEqual(newUnitPrice);
    expect(sale.unitPrice === oldUnitPrice).toBeFalsy();
  });

  it('should set and get quantity', () => {
    const sale = new Sale();
    const newQuantity: number = 25;
    const oldQuantity: number = sale.quantity;
    sale.quantity = newQuantity;

    expect.assertions(2);
    expect(sale.quantity).toEqual(newQuantity);
    expect(sale.quantity === oldQuantity).toBeFalsy();
  });

  it('set unitPrice should recompute totalPrice', () => {
    const sale = new Sale();
    sale.quantity = 10;
    const newUnitPrice: number = 300;
    const oldTotalPrice: number = sale.totalPrice;
    sale.unitPrice = newUnitPrice;

    expect.assertions(1);
    expect(sale.totalPrice).toEqual(3000);
  });

  it('set quantity should recompute totalPrice', () => {
    const sale = new Sale();
    sale.unitPrice = 10;
    const newQuantity: number = 25;
    const oldTotalPrice: number = sale.totalPrice;
    sale.quantity = newQuantity;

    expect.assertions(1);
    expect(sale.totalPrice).toEqual(250);
  });
});
