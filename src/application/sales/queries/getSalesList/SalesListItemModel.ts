export default class SalesListItemModel {
  private _id: number;
  private _date: Date;
  private _customerName: string;
  private _employeeName: string;
  private _productName: string;
  private _unitPrice: number;
  private _quantity: number;
  private _totalPrice: number;

  constructor(
    id: number, date: Date, customerName: string,
    employeeName: string, productName: string,
    unitPrice: number, quantity: number,
    totalPrice: number) {
      this._id = id;
      this._date = date;
      this._customerName = customerName;
      this._employeeName = employeeName;
      this._productName = productName;
      this._unitPrice = unitPrice;
      this._quantity = quantity;
      this._totalPrice = totalPrice;
  }

  public set totalPrice(v : number) {
    this._totalPrice = v;
  }

  public get totalPrice() : number {
    return this._totalPrice;
  }

  public set quantity(v : number) {
    this._quantity = v;
  }

  public get quantity() : number {
    return this._quantity;
  }

  public set unitPrice(v : number) {
    this._unitPrice = v;
  }

  public get unitPrice() : number {
    return this._unitPrice;
  }

  public set productName(v : string) {
    this._productName = v;
  }

  public get productName() : string {
    return this._productName;
  }

  public set employeeName(v : string) {
    this._employeeName = v;
  }

  public get employeeName() : string {
    return this._employeeName;
  }

  public set customerName(v : string) {
    this._customerName = v;
  }

  public get customerName() : string {
    return this._customerName;
  }

  public set date(v : Date) {
    this._date = v;
  }

  public get date() : Date {
    return this._date;
  }

  public set id(v : number) {
    this._id = v;
  }

  public get id() : number {
    return this._id;
  }
}
