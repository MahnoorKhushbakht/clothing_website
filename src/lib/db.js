
import mongoose from 'mongoose';

const connection = {};
const uri = process.env.NEXT_PUBLIC_DB_URL;
async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(uri);

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;


