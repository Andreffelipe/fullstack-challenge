import { Response, Request } from 'express';
import { findManyService } from 'src/dependence';

export class FindManyController {
  async handler(request: Request, response: Response) {
    const { page } = request.params;

    const products = await findManyService.execute(page);

    return response.status(200).json(products);
  }
}
