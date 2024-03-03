import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cookiParser from "cookie-parser";
import path from "path";
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

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookiParser());

app.listen(3000, () => {
  console.log("server is running at 3000");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
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
