import express from "express";
import { projectController } from "./projects.controller";

const router = express.Router();

router.post("/project", projectController.createProject);
router.get("/projectType/:type", projectController.getProjectByType);
router.get("/project/allProject", projectController.getAllProject);
router.get("/project/:id", projectController.getProjectById);
router.put("/project/:id", projectController.updateProjectById);
router.delete("/project/:id", projectController.softDeleteProjectById);

export const projectRoutes = router;
