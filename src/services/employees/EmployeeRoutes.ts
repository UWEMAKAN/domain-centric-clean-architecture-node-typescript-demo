import { Router } from 'express';
import EmployeesController from '../../controllers/employees/EmployeesController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const employeeRouter: Router = Router();
  const controller = new EmployeesController(dependencies.queryFactory.getEmployeesListQuery);
  employeeRouter.route('/').get(controller.getAll);
  return employeeRouter;
}

export default router;
