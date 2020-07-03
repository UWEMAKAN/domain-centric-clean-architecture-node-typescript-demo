import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../common/Logging/ErrorHandler';
import IGetCustomersListQuery from '../../application/customers/queries/IGetCustomersListQuery';

export default class CustomersController {
  private readonly getCustomersListQuery: IGetCustomersListQuery;

  constructor(getCustomersListQuery: IGetCustomersListQuery) {
    this.getCustomersListQuery = getCustomersListQuery;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.getCustomersListQuery.execute();
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }
}
