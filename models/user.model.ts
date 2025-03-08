import mongoose, { Document, models, Schema, Model } from "mongoose";

interface IUser extends Document {
  email?: string;
  name?: string;
  image?: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User: Model<any> =
  models.User || mongoose.model<IUser>("User", userSchema);

export default User;
