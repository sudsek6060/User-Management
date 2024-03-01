import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

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
