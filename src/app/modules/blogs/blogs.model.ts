import { Schema, model } from "mongoose";
import { TBlog } from "./blogs.interface";

// *****************************************************
const BlogSchema = new Schema<TBlog>(
  {
    bolg_title: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

BlogSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const BlogModel = model<TBlog>("Blog", BlogSchema);
