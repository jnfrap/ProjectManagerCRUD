import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, updateUser } from "../controllers/user";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export { router }