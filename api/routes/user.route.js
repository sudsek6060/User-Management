import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserListings,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
import { verifyUserRole } from "../utils/verifyUserRole.js";

const router = express.Router();

router.post("/create-user", verifyUser, verifyUserRole, createUser);
router.post("/update-user/:id", verifyUser, verifyUserRole, updateUser);
router.delete("/delete-user/:id", verifyUser, verifyUserRole, deleteUser);
router.get("/get-user-listings", verifyUser, verifyUserRole, getUserListings);
router.get("/get-user/:id", verifyUser, verifyUserRole, getUser);

export default router;
