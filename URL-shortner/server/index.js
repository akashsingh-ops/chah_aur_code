import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

import { UserRouter } from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", UserRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017//mydb")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error:", err);
  });

app.listen(process.env.PORT, () => {
  console.log("server is runnnig ");
});
