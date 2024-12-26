import express from "express";
import { skillController } from "./skills.controller";

const router = express.Router();

router.post("/skills", skillController.createSkill);
router.post("/projectCategory", skillController.createProjectCategory);

// router.get("/:type", skillController.getSkillsByType);
router.get("/getAllSkill", skillController.getAllSkill);
router.get("/:type", skillController.getSkillsByType);
router.get(
  "/category/projectCategory",
  skillController.getAllProjectCategories
);

router.get("/skills/:id", skillController.getSkillById);
router.get("/projectCategory/:id", skillController.getProjectCategoryById);

router.put("/skills/:id", skillController.updateSkillById);
router.put("/projectCategory/:id", skillController.updateProjectCategoryById);

router.delete("/skills/:id", skillController.softDeleteSkillById);
router.delete(
  "/projectCategory/:id",
  skillController.softDeleteProjectCategoryById
);

export const SkillRoutes = router;
