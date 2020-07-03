import { Router } from 'express';
import ProductsController from '../../controllers/products/ProductsController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const productRouter: Router = Router();
  const controller = new ProductsController(dependencies.queryFactory.getProductsListQuery);

  productRouter.route('/')
    .get(controller.getAll);
  return productRouter;
};

export default router;
