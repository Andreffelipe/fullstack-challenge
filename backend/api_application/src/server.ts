import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/v1', router);

export { app };
