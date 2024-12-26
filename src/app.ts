import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/modules/middleware/globalErrorHandler";
import { UserRoutes } from "./app/modules/user/user.route";
import { authRoutes } from "./app/modules/auth/auth.route";
import { SkillRoutes } from "./app/modules/skills/skills.route";
import { projectRoutes } from "./app/modules/projects/projects.route";
import { BlogRoutes } from "./app/modules/blogs/blogs.route";

// const port = 3000;

//parser
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://marufk20-server.vercel.app",
      "*",
    ],
    credentials: true,
  })
);

app.use("/api", UserRoutes);
app.use("/api", authRoutes);
app.use("/api", SkillRoutes);
app.use("/api", projectRoutes);
app.use("/api", BlogRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(404).send("404 Not Found");
//   res.status(404).json({
//     success: false,
//     message: "Not found",
//   });
//   next();
// });

export default app;
