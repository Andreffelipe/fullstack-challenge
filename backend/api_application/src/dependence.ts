import { FindManyController } from '@controllers/findManyController';
import { FindOneController } from '@controllers/findOneController';
import { ProductRepository } from '@repository/product';
import { FindManyProduct } from './services/findManyProduct';
import { FindOneProduct } from './services/findOneProduct';

const repository = new ProductRepository();

const findOneService = new FindOneProduct(repository);
const findManyService = new FindManyProduct(repository);


const findOneController = new FindOneController();
const findManyController = new FindManyController();

export { findOneService, findManyService, findOneController, findManyController };
