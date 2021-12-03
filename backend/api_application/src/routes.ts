import { Router, Response, Request } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).json({ message: 'Fullstack Challenge 2021' });
});

router.get('/products/:code', (request: Request, response: Response) => {
  return response.status(200).json({ message: 'Fullstack Challenge 2021' });
});

router.get('/products', (request: Request, response: Response) => {
  return response.status(200).json({ message: 'Fullstack Challenge 2021' });
});

export { router };
