import { Request, Response } from 'express';
import { HealthCheckService } from '../service/health-check.service';

export class HealthCheckController {
  public handle(req: Request, res: Response): Response {
    try {
      const healthCheckService = new HealthCheckService();
      
      const data = healthCheckService.execute();
      
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}