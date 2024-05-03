import Comment from '@/utils/models/commentModel'
import dbConnect from '@/lib/db';
export default async function handler(req, res) {
    const { method } = req;
  
    await dbConnect();
  
    switch (method) {
      case 'GET':
        try {
          const comments = await Comment.find({});
          res.status(200).json({ success: true, data: comments });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case 'POST':
        
        try {
          const { firstName,lastName,message, email } = req.body;

      
          const comment = await Comment.create({
            firstName,
           lastName,message,
            email,
          });
          res.status(201).json({ success: true, data: comment });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }