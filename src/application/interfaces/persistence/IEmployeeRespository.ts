import IRepository from './IRepository';
import Employee from '../../../domain/employees/Employee';

export default interface IEmployeeRepository extends IRepository<Employee> {}
