import { Router } from 'express';
import { HealthCheckController } from '../controller/health-check.controller';
import { CreateBudgetRequestController } from '../controller/create-budget-request.controller';
import { GetBudgetRequestsController } from '../controller/get-budget-requests.controller';

const routes = Router();
const healthCheckController = new HealthCheckController();
const createBudgetRequestController = new CreateBudgetRequestController();
const getBudgetRequestsController = new GetBudgetRequestsController();

routes.get('/health', (req, res) => healthCheckController.handle(req, res));
routes.post('/budgets', (req, res) => createBudgetRequestController.handle(req, res));
routes.get('/budget-requests', new GetBudgetRequestsController().handle);


export { routes };