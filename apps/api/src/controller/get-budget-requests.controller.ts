import { Request, Response } from 'express';
import { PrismaBudgetRequestsRepository } from '../repositories/prisma/prisma-budget-requests-repository';
import { GetBudgetRequestsService } from '../service/get-budget-requests.service';

export class GetBudgetRequestsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const budgetRequestsRepository = new PrismaBudgetRequestsRepository();
      const budgetRequestsService = new GetBudgetRequestsService(budgetRequestsRepository);

      const budgetRequests = await budgetRequestsService.execute();

      return response.status(200).json(budgetRequests);
    } catch (error) {
      return response.status(500).json({ message: 'Internal server error.' });
    }
  }
}