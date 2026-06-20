import { IBudgetRequestsRepository, CreateBudgetRequestData, BudgetRequestResponse } from '../repositories/budget-requests-repository.interface';

export class CreateBudgetRequestService {
  constructor(private budgetRequestsRepository: IBudgetRequestsRepository) {}

  async execute(data: CreateBudgetRequestData): Promise<BudgetRequestResponse> {
    const budgetRequest = await this.budgetRequestsRepository.create(data);
    return budgetRequest;
  }
}