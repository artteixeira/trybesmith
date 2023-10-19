import { Router } from 'express';

import productsController from '../controllers/products.controller';
import validatePostProducts from '../middlewares/validatePostProduct';

const productsRouter = Router();

productsRouter.post('/', validatePostProducts, productsController.create);

productsRouter.get('/', productsController.findAll);

export default productsRouter;