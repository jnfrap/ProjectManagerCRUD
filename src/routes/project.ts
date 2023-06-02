import { Router } from "express";
import { deleteProject, getProject, getProjects, postProject, updateProject } from "../controllers/project";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", postProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export { router }