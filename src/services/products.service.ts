import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product: ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
}

async function findAll(): Promise<Product[]> {
  const products = await ProductModel.findAll();

  return products.map((product) => product.dataValues);
}

export default {
  create,
  findAll,
};