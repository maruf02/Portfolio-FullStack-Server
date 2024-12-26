import { TBlog } from "./blogs.interface";
import { BlogModel } from "./blogs.model";

const createBlogIntoDB = async (Blog: TBlog) => {
  const result = await BlogModel.create(Blog);
  return result;
};

const getBlogByTypeFromDB = async (type: string) => {
  const result = await BlogModel.find({ type });
  return result;
};

const getAllBlogFromDB = async () => {
  const result = await BlogModel.find();
  return result;
};

const getBlogByIdFromDB = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};

const updateBlogByIdInDB = async (id: string, BlogData: Partial<TBlog>) => {
  const result = await BlogModel.findByIdAndUpdate(id, BlogData, {
    new: true,
  });
  return result;
};

const softDeleteBlogByIdInDB = async (id: string) => {
  const result = await BlogModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getBlogByTypeFromDB,
  getAllBlogFromDB,
  getBlogByIdFromDB,
  updateBlogByIdInDB,
  softDeleteBlogByIdInDB,
};
