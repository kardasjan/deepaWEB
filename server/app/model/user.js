import mongoose from 'mongoose';
import connection from '../connection';

const Schema = mongoose.Schema;
export const COLLECTION = 'Users';

const schema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  }
});

export default connection.model(COLLECTION, schema);
