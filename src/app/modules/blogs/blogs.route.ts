import express from "express";
import { BlogController } from "./blogs.controller";

const router = express.Router();

router.post("/Blog", BlogController.createBlog);
router.get("/BlogType/:type", BlogController.getBlogByType);
router.get("/Blog/allBlog", BlogController.getAllBlog);
router.get("/Blog/:id", BlogController.getBlogById);
router.put("/Blog/:id", BlogController.updateBlogById);
router.delete("/Blog/:id", BlogController.softDeleteBlogById);

export const BlogRoutes = router;
