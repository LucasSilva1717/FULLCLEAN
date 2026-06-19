export interface CreateBudgetRequestData {
  name: string;
  phone: string;
  email: string;
  state: string;
  neighborhood: string;
  zipCode: string;
  serviceType: string;
  message?: string; // Opcional
}

export interface BudgetRequestResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  state: string;
  neighborhood: string;
  zipCode: string;
  serviceType: string;
  message: string | null;
  createdAt: Date;
}

export interface IBudgetRequestsRepository {
  create(data: CreateBudgetRequestData): Promise<BudgetRequestResponse>;
}