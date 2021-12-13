import { Response, Request } from 'express';
import { findOneService } from '../dependence';

export class FindOneController {
  async handler(request: Request, response: Response) {
    const { code } = request.params;

    const product = await findOneService.execute(code);

    if (product instanceof Error) {
      return response.status(400).json(product.message);
    }

    return response.status(200).json(product);
  }
}
