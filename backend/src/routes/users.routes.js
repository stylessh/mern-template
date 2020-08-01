import { Router } from "express";
const router = Router();
import usersController from "../controllers/usersController";

// get all users
router.get("/", usersController.getAllUsers);

export default router;
