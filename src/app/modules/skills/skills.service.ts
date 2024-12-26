import { SkillModel, ProjectCategoryModel } from "./skills.model";
import { TSkill, TProjectCategory } from "./skills.interface";

// Service: Create a Skill
const createSkillIntoDB = async (skill: TSkill) => {
  const result = await SkillModel.create(skill);
  return result;
};

// Service: Create a Project Category
const createProjectCategoryIntoDB = async (category: TProjectCategory) => {
  const result = await ProjectCategoryModel.create(category);
  return result;
};

// Service: Get All Skills by Type
const getSkillsByTypeFromDB = async (type: string) => {
  const result = await SkillModel.find({ type });
  return result;
};

// Service: Get All Project Categories
const getAllSkillFromDB = async () => {
  const result = await SkillModel.find();
  return result;
};
const getAllProjectCategoriesFromDB = async () => {
  const result = await ProjectCategoryModel.find();
  return result;
};

// Service: Get Skill by ID
const getSkillByIdFromDB = async (id: string) => {
  const result = await SkillModel.findById(id);
  return result;
};

// Service: Get Project Category by ID
const getProjectCategoryByIdFromDB = async (id: string) => {
  const result = await ProjectCategoryModel.findById(id);
  return result;
};

// Service: Update Skill by ID
const updateSkillByIdInDB = async (id: string, skillData: Partial<TSkill>) => {
  const result = await SkillModel.findByIdAndUpdate(id, skillData, {
    new: true,
  });
  return result;
};

// Service: Update Project Category by ID
const updateProjectCategoryByIdInDB = async (
  id: string,
  categoryData: Partial<TProjectCategory>
) => {
  const result = await ProjectCategoryModel.findByIdAndUpdate(
    id,
    categoryData,
    { new: true }
  );
  return result;
};

// Service: Soft Delete Skill by ID
const softDeleteSkillByIdInDB = async (id: string) => {
  const result = await SkillModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

// Service: Soft Delete Project Category by ID
const softDeleteProjectCategoryByIdInDB = async (id: string) => {
  const result = await ProjectCategoryModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const skillService = {
  createSkillIntoDB,
  createProjectCategoryIntoDB,
  getSkillsByTypeFromDB,
  getAllProjectCategoriesFromDB,
  getSkillByIdFromDB,
  getProjectCategoryByIdFromDB,
  updateSkillByIdInDB,
  updateProjectCategoryByIdInDB,
  softDeleteSkillByIdInDB,
  softDeleteProjectCategoryByIdInDB,
  getAllSkillFromDB,
};
