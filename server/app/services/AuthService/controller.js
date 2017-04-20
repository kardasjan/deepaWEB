import jwt from 'jsonwebtoken';
import User from '../../model/user';
import config from '../../config';

async function createToken (user: User): string {
  return jwt.sign(user, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRE_IN
  });
}

async function checkTokenValidity (token: string): Object {
  return jwt.verify(token, config.JWT_SECRET);
}

export default {
  createToken,
  checkTokenValidity
};
