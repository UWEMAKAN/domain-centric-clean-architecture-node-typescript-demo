export default interface IRepository<T> {
  getAll(): Array<T>;
  get(id: number): any;
  add(entity: T): void;
  remove(entity: T): any;
}
