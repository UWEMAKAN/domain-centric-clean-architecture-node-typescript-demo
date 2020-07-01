export default class ProductModel {
  private id: number;
  private name: string;
  private price: number;

  public set Price(v : number) {
    this.price = v;
  }

  public get Price() : number {
    return this.price;
  }

  public set Name(v : string) {
    this.name = v;
  }

  public get Name() : string {
    return this.name;
  }

  public set Id(v : number) {
    this.id = v;
  }

  public get Id() : number {
    return this.id;
  }
}
