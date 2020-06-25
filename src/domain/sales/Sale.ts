import IEntity from '../common/IEntity';
import Customer from '../customers/Customer';
import Employee from '../employees/Employee';
import Product from '../products/Product';

class Sale implements IEntity {
  private _id: number = Number();
  private _quantity: number = Number();
  private _totalPrice: number = Number();
  private _unitPrice: number = Number();
  private _date: Date = new Date();
  private _customer: Customer = new Customer();
  private _employee: Employee = new Employee();
  private _product: Product = new Product();

  private updateTotalPrice(): void {
    this._totalPrice = this._unitPrice * this._quantity;
  }

  public set product(v : Product) {
    this._product = v;
  }

  public get product() : Product {
    return this._product;
  }

  public set employee(v : Employee) {
    this._employee = v;
  }

  public get employee() : Employee {
    return this._employee;
  }

  public set customer(v : Customer) {
    this._customer = v;
  }

  public get customer() : Customer {
    return this._customer;
  }

  public set date(v : Date) {
    this._date = v;
  }

  public get date() : Date {
    return this._date;
  }

  public set totalPrice(v : number) {
    this._totalPrice = v;
  }

  public get totalPrice() : number {
    return this._totalPrice;
  }

  public set quantity(v: number) {
    this._quantity = v;
    this.updateTotalPrice();
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get id(): number {
    return this._id;
  }

  public set unitPrice(v: number) {
    this._unitPrice = v;
    this.updateTotalPrice();
  }

  public get unitPrice(): number {
    return this._unitPrice;
  }
}

export default Sale;
