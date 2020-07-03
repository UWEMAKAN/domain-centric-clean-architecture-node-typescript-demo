import { Request, Response, NextFunction } from 'express';
import IGetEmployeesListQuery from '../../application/employees/queries/IGetEmployeesListQuery'
import ErrorHandler from '../../common/Logging/ErrorHandler';

export default class EmployeesController {
  private readonly getEmployeesListQuery: IGetEmployeesListQuery;

  constructor(getEmployeesListQuery: IGetEmployeesListQuery) {
    this.getEmployeesListQuery = getEmployeesListQuery;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.getEmployeesListQuery.execute();
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }
}
