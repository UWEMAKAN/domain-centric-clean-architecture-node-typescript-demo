import ProductsController from './ProductsController';
import * as mockEntities from '../../../tools/mockEntities';

describe('ProductsController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const controller = new ProductsController(mockEntities.getProductsListQuery);
  it('should create a ProductsController object', () => {
    expect.assertions(2);
    expect(controller).toBeInstanceOf(ProductsController);
    expect(controller).toMatchObject({
      getProductsListQuery: expect.any(Object),
      getAll: expect.any(Function)
    });
  });

  it('should call execute, res.json and return an array of Product objects', async () => {
    const results = await controller.getAll(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(4);
    expect(mockEntities.getProductsListQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(Array);
    expect(results).toEqual(mockEntities.products);
  });
});
