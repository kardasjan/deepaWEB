import mongoose from 'mongoose';
import connection from '../connection';
import {COLLECTION as COLLECTION_CONTACT} from './contact';

const Schema = mongoose.Schema;
export const COLLECTION = 'Sites';

var siteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  contacts: [{
    ref: COLLECTION_CONTACT,
    type: Schema.Types.ObjectId
  }]
});

export default connection.model(COLLECTION, siteSchema);
