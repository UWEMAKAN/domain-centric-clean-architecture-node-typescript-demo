export default class SalesListItemModel {
  private id: number;
  private date: Date;
  private customerName: string;
  private employeeName: string;
  private productName: string;
  private unitPrice: number;
  private quantity: number;
  private totalPrice: number;

  constructor(
    id: number, date: Date, customerName: string,
    employeeName: string, productName: string,
    unitPrice: number, quantity: number,
    totalPrice: number) {
      this.id = id;
      this.date = date;
      this.customerName = customerName;
      this.employeeName = employeeName;
      this.productName = productName;
      this.unitPrice = unitPrice;
      this.quantity = quantity;
      this.totalPrice = totalPrice;
  }

  public set TotalPrice(v : number) {
    this.totalPrice = v;
  }

  public get TotalPrice() : number {
    return this.totalPrice;
  }

  public set Quantity(v : number) {
    this.quantity = v;
  }

  public get Quantity() : number {
    return this.quantity;
  }

  public set UnitPrice(v : number) {
    this.unitPrice = v;
  }

  public get UnitPrice() : number {
    return this.unitPrice;
  }

  public set ProductName(v : string) {
    this.productName = v;
  }

  public get ProductName() : string {
    return this.productName;
  }

  public set EmployeeName(v : string) {
    this.employeeName = v;
  }

  public get EmployeeName() : string {
    return this.employeeName;
  }

  public set CustomerName(v : string) {
    this.customerName = v;
  }

  public get CustomerName() : string {
    return this.customerName;
  }

  public set Date(v : Date) {
    this.date = v;
  }

  public get Date() : Date {
    return this.date;
  }

  public set Id(v : number) {
    this.id = v;
  }

  public get Id() : number {
    return this.id;
  }
}
