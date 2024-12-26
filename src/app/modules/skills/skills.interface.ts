import { Types } from "mongoose";

export const USER_ROLE = {
  othersSkill: "othersSkill",
  programmingSkill: "programmingSkill",
  softSkill: "softSkill",
} as const;

export type TSkill = {
  title: string;
  value: number;
  color: string;
  type: typeof USER_ROLE;
  isDeleted?: boolean;
};

export type TProjectCategory = {
  category_title: string;
  isDeleted?: boolean;
};
