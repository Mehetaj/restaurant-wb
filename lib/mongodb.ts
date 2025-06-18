import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://restaurant-demo:lxNV4VBN4SI3EpVS@cluster0.bisxx4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


const connectMongoDB = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
};

export default connectMongoDB;