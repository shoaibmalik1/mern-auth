import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to the server ");
  })
  .catch((err) => {
    console.log("err");
  });

const app = express();

app.use(express.json());

app.listen(3005, () => {
  console.log("server is run corectly ");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal error messgage";
  return res.status(statusCode).json({
    seccess: false,
    message,
    statusCode,
  });
});
