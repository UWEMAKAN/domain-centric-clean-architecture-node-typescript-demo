import CreateSaleCommand from './CreateSaleCommand';
import * as mockEntities from '../../../../tools/mockEntities';
import CreateSaleModel from './CreateSaleModel';

const model: CreateSaleModel = new CreateSaleModel();
const customerId: number = 4;
const employeeId: number = 3;
const productId: number = 9;
const quantity: number = 20;
model.CustomerId = customerId;
model.EmployeeId = employeeId;
model.ProductId = productId;
model.Quantity = quantity;
const command : CreateSaleCommand = new CreateSaleCommand(
  mockEntities.dateService,
  mockEntities.saleRepositoryFacade,
  mockEntities.saleFactory,
  mockEntities.inventoryService
);

describe('CreateSaleCommand', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('execute should add sale to the repository', async (done) => {
    await command.execute(model);
    expect.assertions(7);
    expect(mockEntities.dateService.getDate).toHaveBeenCalledTimes(1);
    expect(mockEntities.saleRepositoryFacade.addSale).toHaveBeenCalledTimes(1);
    expect(mockEntities.saleRepositoryFacade.getCustomer).toHaveBeenCalledTimes(1);
    expect(mockEntities.saleRepositoryFacade.getEmployee).toHaveBeenCalledTimes(1);
    expect(mockEntities.saleRepositoryFacade.getProduct).toHaveBeenCalledTimes(1);
    expect(mockEntities.saleFactory.create).toHaveBeenCalledTimes(1);
    expect(mockEntities.inventoryService.notifySaleOcurred).toHaveBeenCalledTimes(1);
    done();
  });
});
