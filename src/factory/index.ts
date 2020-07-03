import { createConnection } from 'typeorm';
import QueryFactory from './QueryFactory/QueryFactory';
import CommandFactory from './CommandFactory/CommandFactory';
import RepositoryFactory from './RepositoryFactory/RepositoryFactory';
import DateService from '../common/DateTime/DateService';
import SaleRepositoryFacade from '../application/sales/commands/createSale/repository/SaleRepositoryFacade';
import SaleFactory from '../application/sales/commands/createSale/factory/SaleFactory';
import InventoryService from '../infrastructure/inventory/InventoryService';
import IFactory from './IFactory';

function factory(connectionName: string): IFactory {
  const repositoryFactory = new RepositoryFactory(createConnection, connectionName);
  const queryFactory = new QueryFactory(repositoryFactory);
  const dateService = new DateService();
  const saleRepositoryFacade = new SaleRepositoryFacade(
    repositoryFactory.customerRepository,
    repositoryFactory.employeeRepository,
    repositoryFactory.productRepository,
    repositoryFactory.saleRepository
  );
  const saleFactory = new SaleFactory();
  const inventoryService = new InventoryService();
  const commandFactory = new CommandFactory(
    dateService,
    saleRepositoryFacade,
    saleFactory,
    inventoryService
  );

  return {
    repositoryFactory,
    queryFactory,
    commandFactory
  }
};

export default factory;
