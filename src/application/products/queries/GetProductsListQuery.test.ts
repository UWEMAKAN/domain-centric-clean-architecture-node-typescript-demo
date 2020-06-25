import GetProductsListQuery from './GetProductsListQuery';
import ProductModel from './ProductModel';
import * as mockEntities from '../../../../tools/mockEntities';

describe('GetProductsListQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an Array of ProductModel', () => {
    const query: GetProductsListQuery = new GetProductsListQuery(mockEntities.productRepository);
    const results = query.execute();

    expect.assertions(4);
    expect(results).toBeInstanceOf(Array);
    expect(mockEntities.productRepository.getAll).toHaveBeenCalledTimes(1);
    expect(results[0]).toBeInstanceOf(ProductModel);
    expect(results[0]).toMatchObject({
      _id: expect.any(Number),
      _name: expect.any(String),
      _price: expect.any(Number)
    });
  });
});
