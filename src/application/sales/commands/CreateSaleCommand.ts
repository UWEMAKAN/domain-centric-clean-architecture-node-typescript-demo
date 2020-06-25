import ICreateSaleCommand from './ICreateSaleCommand';
import CreateSaleModel from './CreateSaleModel';
import IDateService from '../../../common/DateTime/IDateService';
import ISaleRepositoryFacade from './createSale/repository/ISaleRepositoryFacade';
import ISaleFactory from './createSale/factory/ISaleFactory';
import IUnitOfWork from '../../interfaces/persistence/IUnitOfWork';
import IInventoryService from '../../interfaces/infrastructure/IInventoryService';

class CreateSaleCommand implements ICreateSaleCommand {
  private readonly _dateService: IDateService;
  private readonly _repositories: ISaleRepositoryFacade;
  private readonly _factory: ISaleFactory;
  private readonly _unitOfWork: IUnitOfWork;
  private readonly _inventory: IInventoryService;

  constructor(
    dateService: IDateService,
    repositories: ISaleRepositoryFacade,
    factory: ISaleFactory,
    unitOfWork: IUnitOfWork,
    inventory: IInventoryService) {
      this._dateService = dateService;
      this._repositories = repositories;
      this._factory = factory;
      this._unitOfWork = unitOfWork;
      this._inventory = inventory;
  }

  public execute(model: CreateSaleModel): void {
    const date: Date = this._dateService.getDate();
    const customer = this._repositories.getCustomer(model.customerId);
    const employee = this._repositories.getEmployee(model.employeeId);
    const product = this._repositories.getProduct(model.productId);
    const quantity = model.quantity;
    const sale = this._factory.create(
      date, customer, employee, product, quantity
    );
    this._repositories.addSale(sale);
    this._unitOfWork.save();
    this._inventory.notifySaleOcurred(product.id, quantity);
  }
}

export default CreateSaleCommand;
