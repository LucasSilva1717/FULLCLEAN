import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import { routes } from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(env.PORT, () => {
  console.log(`🚀 Servidor HTTP rodando perfeitamente na porta ${env.PORT}!`);
});