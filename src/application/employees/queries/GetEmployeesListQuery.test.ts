import GetEmployeesListQuery from './GetEmployeesListQuery';
import EmployeeModel from './EmployeeModel';
import * as mockEntities from '../../../../tools/mockEntities';


describe('GetEmployeesListQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an Array of EmployeeModel', () => {
    const query: GetEmployeesListQuery = new GetEmployeesListQuery(mockEntities.employeeRepository);
    const results = query.execute();

    expect.assertions(4);
    expect(results).toBeInstanceOf(Array);
    expect(mockEntities.employeeRepository.getAll).toHaveBeenCalledTimes(1);
    expect(results[0]).toBeInstanceOf(EmployeeModel);
    expect(results[0]).toMatchObject({
      _id: expect.any(Number),
      _name: expect.any(String)
    });
  });
});
