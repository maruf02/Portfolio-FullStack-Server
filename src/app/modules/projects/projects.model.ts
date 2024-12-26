import { Schema, model } from "mongoose";
import { TProject } from "./projects.interface";

// *****************************************************
const ProjectCategory = new Schema<TProject>(
  {
    project_title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    live_link: {
      type: String,
      required: true,
    },
    github_link: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    description: {
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

ProjectCategory.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const ProjectModel = model<TProject>("Project", ProjectCategory);
