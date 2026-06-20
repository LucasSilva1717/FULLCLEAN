export interface CreateBudgetRequestData {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  state: string;
  neighborhood: string;
  serviceType: string;
  message?: string | null;
}

export interface BudgetRequestResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  state: string;
  neighborhood: string;
  serviceType: string;
  message: string | null;
  createdAt: Date; // Alterado de created_at para createdAt
}

export interface IBudgetRequestsRepository {
  create(data: CreateBudgetRequestData): Promise<BudgetRequestResponse>;
  findMany(): Promise<BudgetRequestResponse[]>;
}