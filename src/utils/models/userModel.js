import { Schema, model, models } from 'mongoose';

const fieldSchema = new Schema({
  name: String,
  comment: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0, 
  },
  slug: {
    type: String,
   unique:true,
  //  required
  },
});
const Field = models.Field || model('Field', fieldSchema);






export default Field;