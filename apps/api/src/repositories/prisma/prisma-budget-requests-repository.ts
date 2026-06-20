import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { IBudgetRequestsRepository, CreateBudgetRequestData, BudgetRequestResponse } from '../budget-requests-repository.interface';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export class PrismaBudgetRequestsRepository implements IBudgetRequestsRepository {
  async create(data: CreateBudgetRequestData): Promise<BudgetRequestResponse> {
    const budgetRequest = await prisma.budgetRequest.create({
      data,
    });

    return budgetRequest;
  }

  async findMany(): Promise<BudgetRequestResponse[]> {
    // Retorna direto os registros do banco, pois os tipos já batem perfeitamente
    const budgetRequests = await prisma.budgetRequest.findMany();
    return budgetRequests;
  }
}