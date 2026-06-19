import { Router } from 'express';
import { HealthCheckController } from '../controller/health-check.controller';

const routes = Router();
const healthCheckController = new HealthCheckController();

routes.get('/health', (req, res) => healthCheckController.handle(req, res));

export { routes };