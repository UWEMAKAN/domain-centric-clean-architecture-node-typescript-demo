import IGetEmployeesListQuery from './IGetEmployeesListQuery';
import EmployeeModel from './EmployeeModel';
import IEmployeeRepository from '../../interfaces/persistence/IEmployeeRespository';

class GetEmployeesListQuery implements IGetEmployeesListQuery {
  private readonly _repository: IEmployeeRepository;

  constructor(repository: IEmployeeRepository) {
    this._repository = repository;
  }

  public async execute(): Promise<Array<EmployeeModel>> {
    const employees = await this._repository.getAll();
    return employees.map((e) => {
      let employee: EmployeeModel = new EmployeeModel();
      employee.Id = e.Id;
      employee.Name = e.Name;
      return employee;
    });
  }
}

export default GetEmployeesListQuery;
