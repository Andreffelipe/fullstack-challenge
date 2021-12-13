import { Router, Response, Request } from 'express';
import { findManyController, findOneController } from './dependence';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).json({ message: 'Fullstack Challenge 2021' });
});

router.get('/product/:code', (request: Request, response: Response) => {
  return findOneController.handler(request, response);
});

router.get('/products/:page', (request: Request, response: Response) => {
  return findManyController.handler(request, response);
});

export { router };
