import ICreateSaleCommand from './ICreateSaleCommand';
import CreateSaleModel from './CreateSaleModel';
import IDateService from '../../../common/DateTime/IDateService';
import ISaleRepositoryFacade from './createSale/repository/ISaleRepositoryFacade';
import ISaleFactory from './createSale/factory/ISaleFactory';
import IUnitOfWork from '../../interfaces/persistence/IUnitOfWork';
import IInventoryService from '../../interfaces/infrastructure/IInventoryService';

class CreateSaleCommand implements ICreateSaleCommand {
  private readonly dateService: IDateService;
  private readonly repositories: ISaleRepositoryFacade;
  private readonly factory: ISaleFactory;
  private readonly unitOfWork: IUnitOfWork;
  private readonly inventory: IInventoryService;

  constructor(
    dateService: IDateService,
    repositories: ISaleRepositoryFacade,
    factory: ISaleFactory,
    unitOfWork: IUnitOfWork,
    inventory: IInventoryService) {
      this.dateService = dateService;
      this.repositories = repositories;
      this.factory = factory;
      this.unitOfWork = unitOfWork;
      this.inventory = inventory;
  }

  public async execute(model: CreateSaleModel): Promise<void> {
    const date: Date = this.dateService.getDate();
    const customer = await this.repositories.getCustomer(model.CustomerId);
    const employee = await this.repositories.getEmployee(model.EmployeeId);
    const product = await this.repositories.getProduct(model.ProductId);
    const quantity = model.Quantity;
    const sale = this.factory.create(
      date, customer, employee, product, quantity
    );
    this.repositories.addSale(sale);
    this.unitOfWork.save();
    this.inventory.notifySaleOcurred(product.Id, quantity);
  }
}

export default CreateSaleCommand;
