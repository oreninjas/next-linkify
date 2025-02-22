import mongoose from "mongoose";

let MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) {
  throw new Error("MONGO_URI isn't defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectToDB() {
  if (cached.conn) {
    console.log("Connected to MongoDB");
    cached.conn;
  }

  if (!cached.promise) {
    mongoose.connect(MONGO_URI).then((res) => {
      console.log("Connected to MongoDB");
      return res;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.log("There was some errors while connecting to MongoDB !!", error);
  }

  return cached.conn;
}
