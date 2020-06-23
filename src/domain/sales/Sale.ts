import IEntity from '../common/IEntity';
import Customer from '../customers/Customer';
import Employee from '../employees/Employee';
import Product from '../products/Product';

class Sale implements IEntity {
  constructor(id: number, date: Date, customer: Customer, employee: Employee, product: Product, quantity: number, unitPrice: number) {
    this._id = id;
    this._date = date;
    this._customer = customer;
    this._employee = employee;
    this._product = product;
    this._quantity = quantity;
    this._unitPrice = unitPrice;
    this._totalPrice = quantity * unitPrice;
  }

  private _id: number;
  private _quantity: number;
  private _totalPrice: number;
  private _unitPrice: number;
  private _date: Date;
  private _customer: Customer;
  private _employee: Employee;
  private _product: Product;

  private updateTotalPrice(): void {
    this._totalPrice = this._unitPrice * this._quantity;
  }

  public set Product(v : Product) {
    this._product = v;
  }

  public get Product() : Product {
    return this._product;
  }

  public set Employee(v : Employee) {
    this._employee = v;
  }

  public get Employee() : Employee {
    return this._employee;
  }

  public set Customer(v : Customer) {
    this._customer = v;
  }

  public get Customer() : Customer {
    return this._customer;
  }

  public set Date(v : Date) {
    this._date = v;
  }

  public get Date() : Date {
    return this._date;
  }

  public set TotalPrice(v : number) {
    this._totalPrice = v;
  }

  public get TotalPrice() : number {
    return this._totalPrice;
  }

  public set Quantity(v: number) {
    this._quantity = v;
    this.updateTotalPrice();
  }

  public get Quantity(): number {
    return this._quantity;
  }

  public set Id(v: number) {
    this._id = v;
  }

  public get Id(): number {
    return this._id;
  }

  public set UnitPrice(v: number) {
    this._unitPrice = v;
    this.updateTotalPrice();
  }

  public get UnitPrice(): number {
    return this._unitPrice;
  }
}

export default Sale;
