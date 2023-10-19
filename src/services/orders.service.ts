import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

async function findAll(): Promise<Order[]> {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });

  const filteredOrders = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product: unknown) => {
      const { id } = product as { id: number };

      return id;
    }) || [],
  }));

  return filteredOrders;
}

export default {
  findAll,
};