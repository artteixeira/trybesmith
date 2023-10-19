import { Request, Response } from 'express';

import productsService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const product = await productsService.create({ name, price, orderId });

  res.status(201).json(product);
}

async function findAll(_req: Request, res: Response) {
  const products = await productsService.findAll();

  res.status(200).json(products);
}

export default {
  create,
  findAll,
};