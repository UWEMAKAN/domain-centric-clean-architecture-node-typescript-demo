import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../common/Logging/ErrorHandler';
import IGetProductsListQuery from '../../application/products/queries/IGetProductsListQuery';

export default class ProductsController {
  private readonly getProductsListQuery: IGetProductsListQuery;

  constructor(getProductsListQuery: IGetProductsListQuery) {
    this.getProductsListQuery = getProductsListQuery;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.getProductsListQuery.execute();
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }
}
