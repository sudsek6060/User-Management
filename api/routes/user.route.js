import express from "express";
import { createUser } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
import { verifyUserRole } from "../utils/verifyUserRole.js";

const router = express.Router();

router.post("/create-user", verifyUser, verifyUserRole, createUser);

export default router;
