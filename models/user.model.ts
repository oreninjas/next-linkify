import mongoose, { Document, models, Schema, Model } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User: Model<any> =
  models.User || mongoose.model<IUser>("User", userSchema);

export default User;
