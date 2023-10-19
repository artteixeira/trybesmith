import { Product } from "../../src/types/Product";
import { ProductInputtableTypes } from '../../src/database/models/product.model';

const existingProduct: Product = {
  id: 1,
  name: 'Produto Teste',
  price: '10 peças de ouro',
  orderId: 7,
}

const requestBody: ProductInputtableTypes = {
  name: 'Produto Teste',
  price: '10 peças de ouro',
  orderId: 7,
}

const allProductsMock: Product[] = [
  {
    "id": 1,
    "name": "Excalibur",
    "price": "10 peças de ouro",
    "orderId": 1
  },
  {
    "id": 2,
    "name": "Espada Justiceira",
    "price": "20 peças de ouro",
    "orderId": 1
  },
  {
    "id": 3,
    "name": "Lira de Orfeu",
    "price": "1 peça de ouro",
    "orderId": 2
  },
  {
    "id": 4,
    "name": "Armadura de Aquiles",
    "price": "1 peça de ouro",
    "orderId": 2
  },
  {
    "id": 5,
    "name": "Harpa de Dagda",
    "price": "15 peças de ouro",
    "orderId": 3
  }
]

export default {
  existingProduct,
  requestBody,
  allProductsMock,
}