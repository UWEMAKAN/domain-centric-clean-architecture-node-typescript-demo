import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../common/Logging/ErrorHandler';
import IGetSalesListQuery from '../../application/sales/queries/getSalesList/IGetSalesListQuery';
import IGetSaleDetailQuery from '../../application/sales/queries/getSaleDetail/IGetSaleDetailQuery';
import ICreateSaleCommand from '../../application/sales/commands/ICreateSaleCommand';
import CreateSaleModel from '../../application/sales/commands/CreateSaleModel';

export default class SalesController {
  private readonly getSalesListQuery: IGetSalesListQuery;
  private readonly getSaleDetailQuery: IGetSaleDetailQuery;
  private readonly createSaleCommand: ICreateSaleCommand;

  constructor(getSalesListQuery: IGetSalesListQuery, getSaleDetailQuery: IGetSaleDetailQuery, createSaleCommand: ICreateSaleCommand) {
    this.createSaleCommand = createSaleCommand;
    this.getSaleDetailQuery = getSaleDetailQuery;
    this.getSalesListQuery = getSalesListQuery;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.getSalesListQuery.execute();
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { salesId } = req.params;
      const id: number = Number.parseInt(salesId);
      const response = await this.getSaleDetailQuery.execute(id);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const model = new CreateSaleModel();
      model.CustomerId = data.customerId;
      model.EmployeeId = data.employeeId;
      model.ProductId = data.productId;
      model.Quantity = data.quantity;
      const response = await this.createSaleCommand.execute(model);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }
}
