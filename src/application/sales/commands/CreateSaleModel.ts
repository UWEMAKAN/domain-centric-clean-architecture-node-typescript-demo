export default class CreateSaleModel {
  private _customerId: number = Number();
  private _employeeId: number = Number();
  private _productId: number = Number();
  private _quantity: number = Number();

  public set quantity(v : number) {
    this._quantity = v;
  }

  public get quantity() : number {
    return this._quantity;
  }

  public set productId(v : number) {
    this._productId = v;
  }

  public get productId() : number {
    return this._productId;
  }

  public set employeeId(v : number) {
    this._employeeId = v;
  }

  public get employeeId() : number {
    return this._employeeId;
  }

  public set customerId(v : number) {
    this._customerId = v;
  }

  public get customerId() : number {
    return this._customerId;
  }
}
