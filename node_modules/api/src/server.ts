import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import { routes } from './routes';
import { logger } from './config/logger';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(env.PORT, () => {
  logger.info(`🚀 Servidor HTTP rodando perfeitamente na porta ${env.PORT}!`);
});