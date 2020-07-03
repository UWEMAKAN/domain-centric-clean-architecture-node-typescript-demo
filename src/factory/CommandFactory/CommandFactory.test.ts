import { createConnection } from 'typeorm';
import CommandFactory from './CommandFactory';
import RepositoryFactory from '../RepositoryFactory/RepositoryFactory';
import DateService from '../../common/DateTime/DateService';
import SaleRepositoryFacade from '../../application/sales/commands/createSale/repository/SaleRepositoryFacade';
import SaleFactory from '../../application/sales/commands/createSale/factory/SaleFactory';
import InventoryService from '../../infrastructure/inventory/InventoryService';
import CreateSaleCommand from '../../application/sales/commands/CreateSaleCommand';

describe('CommandFactory', () => {
  it('should create and return a CommandFactory object', () => {
    const dateService = new DateService();
    const saleFactory = new SaleFactory();
    const inventoryService = new InventoryService();
    const repositoryFactory = new RepositoryFactory(createConnection, 'test');
    const saleRepositoryFacade = new SaleRepositoryFacade(
      repositoryFactory.customerRepository,
      repositoryFactory.employeeRepository,
      repositoryFactory.productRepository,
      repositoryFactory.saleRepository
    );
    const factory = new CommandFactory(dateService, saleRepositoryFacade, saleFactory, inventoryService);
    expect.assertions(2);
    expect(factory).toBeInstanceOf(CommandFactory);
    expect(factory).toMatchObject({
      createSaleCommand: expect.any(CreateSaleCommand)
    });
  });
});
