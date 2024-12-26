import { Request, Response } from "express";
import { skillService } from "./skills.service";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../utils/sendResponse";

// Controller: Create a Skill
const createSkill = async (req: Request, res: Response) => {
  const skill = req.body;
  const result = await skillService.createSkillIntoDB(skill);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Skill created successfully",
    data: result,
  });
};

// Controller: Create a Project Category
const createProjectCategory = async (req: Request, res: Response) => {
  const category = req.body;
  const result = await skillService.createProjectCategoryIntoDB(category);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Project Category created successfully",
    data: result,
  });
};

// Controller: Get All Skills by Type
const getSkillsByType = async (req: Request, res: Response) => {
  const { type } = req.params;
  const result = await skillService.getSkillsByTypeFromDB(type);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Skills retrieved successfully",
    data: result,
  });
};

// Controller: Get All Project Categories

const getAllProjectCategories = async (req: Request, res: Response) => {
  const result = await skillService.getAllProjectCategoriesFromDB();
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project Categories retrieved successfully",
    data: result,
  });
};

const getAllSkill = async (_req: Request, res: Response) => {
  const result = await skillService.getAllSkillFromDB();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Skill retrieved successfully",
    data: result,
  });
};
// Controller: Get Skill by ID
const getSkillById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await skillService.getSkillByIdFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Skill retrieved successfully",
    data: result,
  });
};

// Controller: Get Project Category by ID
const getProjectCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await skillService.getProjectCategoryByIdFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project Category retrieved successfully",
    data: result,
  });
};

// Controller: Update Skill by ID
const updateSkillById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const skillData = req.body;
  const result = await skillService.updateSkillByIdInDB(id, skillData);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Skill updated successfully",
    data: result,
  });
};

// Controller: Update Project Category by ID
const updateProjectCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const categoryData = req.body;
  const result = await skillService.updateProjectCategoryByIdInDB(
    id,
    categoryData
  );
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project Category updated successfully",
    data: result,
  });
};

// Controller: Soft Delete Skill by ID
const softDeleteSkillById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await skillService.softDeleteSkillByIdInDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Skill deleted successfully",
    data: result,
  });
};

// Controller: Soft Delete Project Category by ID
const softDeleteProjectCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await skillService.softDeleteProjectCategoryByIdInDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project Category deleted successfully",
    data: result,
  });
};

export const skillController = {
  createSkill,
  createProjectCategory,
  getSkillsByType,
  getAllProjectCategories,
  getSkillById,
  getProjectCategoryById,
  updateSkillById,
  updateProjectCategoryById,
  softDeleteSkillById,
  softDeleteProjectCategoryById,
  getAllSkill,
};
