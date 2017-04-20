import mongoose from 'mongoose';
import connection from '../connection';
import {COLLECTION as COLLECTION_USERS} from './user';

const Schema = mongoose.Schema;
export const COLLECTION = 'Sites';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  created_by: [{
    ref: COLLECTION_USERS,
    type: Schema.Types.ObjectId
  }],
  created_at: Date,
  updated_at: Date
});

schema.pre('save', function (next: Function){
  const now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

export default connection.model(COLLECTION, schema);
