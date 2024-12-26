import { Request, Response } from "express";
import sendResponse from "../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { BlogService } from "./blogs.service";

const createBlog = async (req: Request, res: Response) => {
  const Blog = req.body;
  const result = await BlogService.createBlogIntoDB(Blog);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Skill created successfully",
    data: result,
  });
};

const getAllBlog = async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogFromDB();
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Blog Categories retrieved successfully",
    data: result,
  });
};

const getBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.getBlogByIdFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Blog Category retrieved successfully",
    data: result,
  });
};

const getBlogByType = async (req: Request, res: Response) => {
  const { type } = req.params;
  const result = await BlogService.getBlogByTypeFromDB(type);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Skills retrieved successfully",
    data: result,
  });
};

const updateBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const BlogData = req.body;
  const result = await BlogService.updateBlogByIdInDB(id, BlogData);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Blog Category updated successfully",
    data: result,
  });
};

const softDeleteBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.softDeleteBlogByIdInDB(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Blog Category deleted successfully",
    data: result,
  });
};

export const BlogController = {
  createBlog,
  getBlogByType,
  getAllBlog,
  getBlogById,
  updateBlogById,
  softDeleteBlogById,
};
