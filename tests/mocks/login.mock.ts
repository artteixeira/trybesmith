import bcrypt from 'bcryptjs';

const validPassword = 'terrível';
const validUsername = 'Hagar';
const notFoundUsername = 'Hagar22';
const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;
const bcryptPassword = bcrypt.hashSync('terrível', SALT_ROUNDS);

const noUsernameLoginBody = { username: '', password: validPassword };
const noPasswordLoginBody = { username: validUsername, password: '' };
const notExistentUserBody = { username: notFoundUsername, password: validPassword };
const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrongPassword' };
const validLoginBody = { username: validUsername, password: validPassword };

const existingUser = {
  id: 1,
  username: validUsername,
  vocation: 'Guerreiro',
  level: 10,
  password: bcryptPassword,
};

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  notExistentUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody,
}