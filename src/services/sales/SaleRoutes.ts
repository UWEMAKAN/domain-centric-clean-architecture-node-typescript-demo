import { Router } from 'express';
import SalesController from '../../controllers/sales/SalesController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const saleRouter: Router = Router();
  const controller = new SalesController(
    dependencies.queryFactory.getSalesListQuery,
    dependencies.queryFactory.getSaleDetailQuery,
    dependencies.commandFactory.createSaleCommand
  );
  saleRouter.route('/').get(controller.getAll);
  return saleRouter;
}

export default router;
