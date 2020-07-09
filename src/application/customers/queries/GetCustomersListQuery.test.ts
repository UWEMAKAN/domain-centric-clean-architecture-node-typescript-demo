import GetCustomersListQuery from './GetCustomersListQuery';
import CustomerModel from './CustomerModel';
import * as mockEntities from '../../../../tools/mockEntities';

describe('GetCustomersListQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an Array of CustomerModel', async () => {
    const query: GetCustomersListQuery = new GetCustomersListQuery(mockEntities.customerRepository);
    const results = await query.execute();

    expect.assertions(4);
    expect(results).toBeInstanceOf(Array);
    expect(mockEntities.customerRepository.getAll).toHaveBeenCalledTimes(1);
    expect(results[0]).toBeInstanceOf(CustomerModel);
    expect(results[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String)
    });
  });
});
