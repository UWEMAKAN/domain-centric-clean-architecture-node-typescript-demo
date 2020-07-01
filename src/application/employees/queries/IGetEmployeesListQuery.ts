import EmployeeModel from './EmployeeModel';

export default interface IGetEmployeesListQuery {
  execute(): Promise<Array<EmployeeModel>>;
}
