import { TProject } from "./projects.interface";
import { ProjectModel } from "./projects.model";

const createProjectIntoDB = async (project: TProject) => {
  const result = await ProjectModel.create(project);
  return result;
};

const getProjectByTypeFromDB = async (type: string) => {
  const result = await ProjectModel.find({ type });
  return result;
};

const getAllProjectFromDB = async () => {
  const result = await ProjectModel.find();
  return result;
};

const getProjectByIdFromDB = async (id: string) => {
  const result = await ProjectModel.findById(id);
  return result;
};

const updateProjectByIdInDB = async (
  id: string,
  projectData: Partial<TProject>
) => {
  const result = await ProjectModel.findByIdAndUpdate(id, projectData, {
    new: true,
  });
  return result;
};

const softDeleteProjectByIdInDB = async (id: string) => {
  const result = await ProjectModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const projectService = {
  createProjectIntoDB,
  getProjectByTypeFromDB,
  getAllProjectFromDB,
  getProjectByIdFromDB,
  updateProjectByIdInDB,
  softDeleteProjectByIdInDB,
};
