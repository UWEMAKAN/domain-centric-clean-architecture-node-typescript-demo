import SalesController from './SalesController';
import * as mockEntities from '../../../tools/mockEntities';

describe('SalesController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const controller = new SalesController(
    mockEntities.getSalesListQuery,
    mockEntities.getSaleDetailQuery,
    mockEntities.createSaleCommand
  );

  it('should create a SalesController object', () => {
    expect.assertions(2);
    expect(controller).toBeInstanceOf(SalesController);
    expect(controller).toMatchObject({
      getSalesListQuery: expect.any(Object),
      getSaleDetailQuery: expect.any(Object),
      createSaleCommand: expect.any(Object),
      getAll: expect.any(Function),
      getById: expect.any(Function),
      create: expect.any(Function)
    });
  });

  it('getAll should call execute, res.json and return an array of Sale objects', async () => {
    const results = await controller.getAll(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(4);
    expect(mockEntities.getSalesListQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(Array);
    expect(results).toEqual(mockEntities.sales);
  });

  it('getById should call execute, res.json and return a Sale object', async () => {
    const results = await controller.getById(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(3);
    expect(mockEntities.getSaleDetailQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toEqual(mockEntities.sales[1]);
  });

  it('create should call execute, res.json', async () => {
    const results = await controller.create(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(2);
    expect(mockEntities.createSaleCommand.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
  });
});
