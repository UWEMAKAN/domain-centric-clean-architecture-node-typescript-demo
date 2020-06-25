import EmployeeModel from './EmployeeModel';

export default interface IGetEmployeesListQuery {
  execute(): Array<EmployeeModel>;
}
