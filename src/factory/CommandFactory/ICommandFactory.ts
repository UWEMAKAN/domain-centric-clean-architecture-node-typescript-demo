import ICreateSaleCommand from '../../application/sales/commands/ICreateSaleCommand';

export default interface ICommandFactory {
  createSaleCommand: ICreateSaleCommand;
}
