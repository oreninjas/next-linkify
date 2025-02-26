import { model, models, Schema } from "mongoose";

interface Ilinkify {
  createdBy?: String;
  title?: String;
  isPublished?: Boolean;
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

const linkify = models.linkify || model("linkify", linkifySchema);
export default linkify;
