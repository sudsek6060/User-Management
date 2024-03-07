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

router.use(verifyUser);
router.use(verifyUserRole);

router.post("/create-user", createUser);
router.post("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);
router.get("/get-user-listings", getUserListings);
router.get("/get-user/:id", getUser);

export default router;
