export default class ProductModel {
  private _id: number = Number();
  private _name: string = String();
  private _price: number = Number();

  public set price(v : number) {
    this._price = v;
  }

  public get price() : number {
    return this._price;
  }

  public set name(v : string) {
    this._name = v;
  }

  public get name() : string {
    return this._name;
  }

  public set id(v : number) {
    this._id = v;
  }

  public get id() : number {
    return this._id;
  }
}
