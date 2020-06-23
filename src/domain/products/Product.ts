import IEntity from "../common/IEntity";

class Product implements IEntity {
  /**
   * class Product implements IEntity
   * @param id product id: number
   * @param name product name: string
   * @param price product price: number
   */
  constructor(id: number, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  private _id: number;
  private _name: string;
  private _price: number;

  public set Id(id: number) {
    this._id = id;
  }

  public get Id(): number {
    return this._id;
  }

  public set Name(name : string) {
    this._name = name;
  }

  public get Name() : string {
    return this._name;
  }

  public set Price(price : number) {
    this._price = price;
  }

  public get Price() : number {
    return this._price;
  }

}

export default Product;
