import ICommandFactory from './ICommandFactory';
import ICreateSaleCommand from '../../application/sales/commands/ICreateSaleCommand';
import CreateSaleCommand from '../../application/sales/commands/CreateSaleCommand';
import IDateService from '../../common/DateTime/IDateService';
import ISaleRepositoryFacade from '../../application/sales/commands/createSale/repository/ISaleRepositoryFacade';
import ISaleFactory from '../../application/sales/commands/createSale/factory/ISaleFactory';
import IInventoryService from '../../application/interfaces/infrastructure/IInventoryService';

class CommandFactory implements ICommandFactory {
  public readonly createSaleCommand: ICreateSaleCommand;
  constructor(
    dateService: IDateService,
    saleRepositoryFacade: ISaleRepositoryFacade,
    saleFactory: ISaleFactory,
    inventoryService: IInventoryService
  ) {
    this.createSaleCommand = new CreateSaleCommand(
      dateService,
      saleRepositoryFacade,
      saleFactory,
      inventoryService
    );
  }
}

export default CommandFactory;
