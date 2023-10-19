import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

const secret = process.env.JWT_SECRET || 'secret';

const isBodyValid = (username: string, password: string) => username && password;

const auth = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!isBodyValid(username, password)) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const token = jwt.sign({ data: username }, secret, { expiresIn: '1d' });

  res.status(200).json({ token });
};

export default auth;