import { PrismaClient } from '@prisma/client';
import { IBudgetRequestsRepository, CreateBudgetRequestData, BudgetRequestResponse } from '../budget-requests-repository.interface';

const prisma = new PrismaClient();

export class PrismaBudgetRequestsRepository implements IBudgetRequestsRepository {
  async create(data: CreateBudgetRequestData): Promise<BudgetRequestResponse> {
    const budgetRequest = await prisma.budgetRequest.create({
      data,
    });

    return budgetRequest;
  }
}