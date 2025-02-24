import { model, Schema } from "mongoose";

interface Ilinkify {
  createdBy?: String;
  title?: String;
  isPublished?: String;
}

const linkifySchema = new Schema<Ilinkify>({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
});

const linkify = model("linkify", linkifySchema);
export default linkify;
