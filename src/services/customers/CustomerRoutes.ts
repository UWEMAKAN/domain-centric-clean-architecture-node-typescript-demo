import { Router } from 'express';
import CustomersController from '../../controllers/customers/CustomersController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const customerRouter: Router = Router();
  const controller = new CustomersController(dependencies.queryFactory.getCustomersListQuery);

  customerRouter.route('/')
    .get(controller.getAll);
  return customerRouter;
};

export default router;
