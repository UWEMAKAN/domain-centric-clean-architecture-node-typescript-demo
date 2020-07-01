export default class CreateSaleModel {
  private customerId: number;
  private employeeId: number;
  private productId: number;
  private quantity: number;

  public set Quantity(v : number) {
    this.quantity = v;
  }

  public get Quantity() : number {
    return this.quantity;
  }

  public set ProductId(v : number) {
    this.productId = v;
  }

  public get ProductId() : number {
    return this.productId;
  }

  public set EmployeeId(v : number) {
    this.employeeId = v;
  }

  public get EmployeeId() : number {
    return this.employeeId;
  }

  public set CustomerId(v : number) {
    this.customerId = v;
  }

  public get CustomerId() : number {
    return this.customerId;
  }
}
