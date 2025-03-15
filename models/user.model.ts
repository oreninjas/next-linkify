import mongoose, { Document, models, Schema, Model } from "mongoose";

interface IUser extends Document {
  email?: string;
  password?: string;
  name?: string;
  image?: string;
  role?: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const User: Model<any> =
  models.User || mongoose.model<IUser>("User", userSchema);

export default User;
