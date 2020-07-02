import EmployeesController from './EmployeesController';
import * as mockEntities from '../../../tools/mockEntities';

describe('EmployeesController', () => {
  afterEach(async () => {
    jest.clearAllMocks();
  });

  const controller = new EmployeesController(mockEntities.getEmployeesListQuery);
  it('should create an EmployeesController object', () => {
    expect.assertions(2);
    expect(controller).toBeInstanceOf(EmployeesController);
    expect(controller).toMatchObject({
      getEmployeesListQuery: expect.any(Object),
      getAll: expect.any(Function)
    });
  });

  it('should call execute, res.json, and return an array of Employee objects', async (done) => {
    const results = await controller.getAll(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(4);
    expect(mockEntities.getEmployeesListQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(Array);
    expect(results).toEqual(mockEntities.employees);
    done();
  });
});
