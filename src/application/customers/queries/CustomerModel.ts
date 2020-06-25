export default class CustomerModel {
  private _id: number = Number();
  private _name: string = String();

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
