import User from "../models/user.model.js";
import { errorHandler } from "./errorHandler.js";

export const verifyUserRole = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    if (!user) return next(errorHandler(404, "user not found"));

    if (user.role != "admin") {
      return next(errorHandler(401, "you are not authorized to this route"));
    }
    next();
  } catch (error) {
    next(error);
  }
};
