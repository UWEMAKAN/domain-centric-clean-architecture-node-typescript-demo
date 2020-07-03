import CustomersController from './CustomersController';
import * as mockEntities from '../../../tools/mockEntities';

describe('CustomersController', () => {
  afterEach(async () => {
    jest.clearAllMocks();
  });

  const controller = new CustomersController(mockEntities.getCustomersListQuery);
  it('should create a CustomersController object', () => {
    expect.assertions(2);
    expect(controller).toBeInstanceOf(CustomersController);
    expect(controller).toMatchObject({
      getCustomersListQuery: expect.any(Object),
      getAll: expect.any(Function)
    });
  });

  it('should call execute, res.json and return an array of Customer objects', async (done) => {
    const results = await controller.getAll(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(4);
    expect(mockEntities.getCustomersListQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(Array);
    expect(results).toEqual(mockEntities.customers);
    done();
  });
});
