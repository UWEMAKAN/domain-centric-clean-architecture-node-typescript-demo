import IEntity from '../common/IEntity';

class Customer implements IEntity {
  /**
   * class Customer implements IEntity
   * @param id customer id: number
   * @param name customer name: string
   */
  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  private _id: number;
  private _name: string;

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
}

export default Customer;
