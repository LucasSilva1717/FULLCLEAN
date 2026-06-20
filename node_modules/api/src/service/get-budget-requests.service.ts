import { PrismaBudgetRequestsRepository } from '../repositories/prisma/prisma-budget-requests-repository';

export class GetBudgetRequestsService {
  constructor(private budgetRequestsRepository: PrismaBudgetRequestsRepository) {}

  async execute() {
    const budgetRequests = await this.budgetRequestsRepository.findMany();
    return budgetRequests;
  }
}