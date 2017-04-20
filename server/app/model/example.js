import mongoose from 'mongoose';
import connection from '../connection';

const Schema = mongoose.Schema;
export const COLLECTION = 'Example';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

export default connection.model(COLLECTION, schema);
