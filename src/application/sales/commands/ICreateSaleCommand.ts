import CreateSaleModel from './CreateSaleModel';

export default interface ICreateSaleCommand {
  execute(model: CreateSaleModel): void;
}
