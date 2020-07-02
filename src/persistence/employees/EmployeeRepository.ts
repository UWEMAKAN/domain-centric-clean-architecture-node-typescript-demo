import Employee from '../../domain/employees/Employee';
import IEmployeeRepository from '../../application/interfaces/persistence/IEmployeeRespository';
import AbstractRepository from '../shared/Repository';

class EmployeeRepository extends AbstractRepository<Employee> implements IEmployeeRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }
}

export default EmployeeRepository;
