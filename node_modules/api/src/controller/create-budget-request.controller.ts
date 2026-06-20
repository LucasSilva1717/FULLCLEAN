import { Request, Response } from 'express';
import { z } from 'zod';
import { PrismaBudgetRequestsRepository } from '../repositories/prisma/prisma-budget-requests-repository';
import { CreateBudgetRequestService } from '../service/create-budget-request.service';

const createBudgetBodySchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  phone: z.string().min(1, "O telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),
  state: z.string().min(1, "O estado é obrigatório"),
  neighborhood: z.string().min(1, "O bairro é obrigatório"),
  zipCode: z.string().min(1, "O CEP é obrigatório"),
  serviceType: z.string().min(1, "Selecione um tipo de serviço"),
  message: z.string().optional(),
});

export class CreateBudgetRequestController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = createBudgetBodySchema.parse(request.body);

      const budgetRequestsRepository = new PrismaBudgetRequestsRepository();
      const createBudgetRequestService = new CreateBudgetRequestService(budgetRequestsRepository);

      const budgetRequest = await createBudgetRequestService.execute(data);

      return response.status(201).json(budgetRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({ 
          message: 'Erro de validação nos dados enviados.', 
          errors: error.format() 
        });
      }

      return response.status(500).json({ message: 'Internal server error.' });
    }
  }
}