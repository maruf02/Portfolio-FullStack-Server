import { Request, Response } from "express";
import sendResponse from "../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { projectService } from "./projects.service";

const createProject = async (req: Request, res: Response) => {
  const project = req.body;
  const result = await projectService.createProjectIntoDB(project);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Skill created successfully",
    data: result,
  });
};

const getAllProject = async (req: Request, res: Response) => {
  const result = await projectService.getAllProjectFromDB();
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project Categories retrieved successfully",
    data: result,
  });
};

const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectService.getProjectByIdFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project Category retrieved successfully",
    data: result,
  });
};

const getProjectByType = async (req: Request, res: Response) => {
  const { type } = req.params;
  const result = await projectService.getProjectByTypeFromDB(type);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Skills retrieved successfully",
    data: result,
  });
};

const updateProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const projectData = req.body;
  const result = await projectService.updateProjectByIdInDB(id, projectData);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project Category updated successfully",
    data: result,
  });
};

const softDeleteProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectService.softDeleteProjectByIdInDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project Category deleted successfully",
    data: result,
  });
};

export const projectController = {
  createProject,
  getProjectByType,
  getAllProject,
  getProjectById,
  updateProjectById,
  softDeleteProjectById,
};
