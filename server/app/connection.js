import mongoose from 'mongoose';
import config from './config';
import { getEnv, EnvTest } from './env';
 
// Use native promises
mongoose.Promise = global.Promise;

var mongo_url = config.MONGO_URL;

if (getEnv() === EnvTest) {
  mongo_url = config.MONGO_TEST_URL;
}

console.info("DB:", mongo_url); // eslint-disable-line

global.db = mongoose.createConnection(mongo_url);

export default global.db;
