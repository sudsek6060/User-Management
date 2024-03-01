import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("server is running at 3000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
