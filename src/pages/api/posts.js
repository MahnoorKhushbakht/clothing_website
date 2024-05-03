import Post from '@/utils/models/userModel'
import dbConnect from '@/lib/db';
export default async function handler(req, res) {
    const { method } = req;
  
    await dbConnect();
  
    switch (method) {
      case 'GET':
        try {
          const posts = await Post.find({});
          res.status(200).json({ success: true, data: posts });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case 'POST':
        
        try {
          const { name, comment, rating } = req.body;

      
          const post = await Post.create({
            name,
            comment,
            rating,
          });
          res.status(201).json({ success: true, data: post });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }