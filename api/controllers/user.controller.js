import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";

export const createUser = async (req, res, next) => {
  const { username, email, password, role, age, gender } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
      age,
      gender,
    });
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) next(errorHandler(402, "user not found"));

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          age: req.body.age,
          gender: req.body.gender,
          role: req.body.role,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) next(errorHandler(404, "user not found"));

  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (req, res, next) => {
  try {
    const listings = await User.find();
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
