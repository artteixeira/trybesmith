import { Request, Response } from 'express';

import ordersService from '../services/orders.service';

async function findAll(req: Request, res: Response) {
  const orders = await ordersService.findAll();

  res.status(200).json(orders);
}

export default {
  findAll,
};