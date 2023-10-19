import { Request, Response, NextFunction } from 'express';

const verifyName = (name: unknown) => {
  if (!name) {
    return { status: 400, message: '"name" is required' };
  }

  if (typeof name !== 'string') {
    return { status: 422, message: '"name" must be a string' };
  }

  if (name.length < 3) {
    return { status: 422, message: '"name" length must be at least 3 characters long' };
  }
};

const verifyPrice = (price: unknown) => {
  if (!price) {
    return { status: 400, message: '"price" is required' };
  }

  if (typeof price !== 'string') {
    return { status: 422, message: '"price" must be a string' };
  }

  if (price.length < 3) {
    return { status: 422, message: '"price" length must be at least 3 characters long' };
  }
};

const validatePostProducts = (req: Request, res: Response, next: NextFunction) => {
  const { name, price } = req.body;

  const nameError = verifyName(name);
  const priceError = verifyPrice(price);

  if (nameError) return res.status(nameError.status).json({ message: nameError.message });
  if (priceError) return res.status(priceError.status).json({ message: priceError.message });

  next();
};

export default validatePostProducts;