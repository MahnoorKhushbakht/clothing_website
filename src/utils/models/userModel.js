import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
  name: String,
  comment: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0, 
  },
});

const Post = models.Post || model('Post', postSchema);

export default Post;