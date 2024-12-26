import { Schema, model } from "mongoose";
import { TProjectCategory, TSkill, USER_ROLE } from "./skills.interface";

const SkillSchema = new Schema<TSkill>(
  {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: USER_ROLE,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);
// *****************************************************

// *****************************************************
const ProjectCategorySchema = new Schema<TProjectCategory>(
  {
    category_title: {
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

SkillSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

ProjectCategorySchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const SkillModel = model<TSkill>("Skills", SkillSchema);

export const ProjectCategoryModel = model<TProjectCategory>(
  "ProjectCategory",
  ProjectCategorySchema
);
