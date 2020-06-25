import IGetEmployeesListQuery from './IGetEmployeesListQuery';
import EmployeeModel from './EmployeeModel';
import IEmployeeRepository from '../../interfaces/persistence/IEmployeeRespository';

class GetEmployeesListQuery implements IGetEmployeesListQuery {
  private readonly _repository: IEmployeeRepository;

  constructor(repository: IEmployeeRepository) {
    this._repository = repository;
  }

  public execute(): Array<EmployeeModel> {
    const employees = this._repository.getAll();
    return employees.map((e) => {
      let employee: EmployeeModel = new EmployeeModel();
      employee.id = e.id;
      employee.name = e.name;
      return employee;
    });
  }
}

export default GetEmployeesListQuery;
