import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import studentRouter from "./route/studentRouter.js";
import libraryRouter from "./route/libraryRouter.js";
import RegRouter from "./route/registrationRouter.js";
import loginRouter from "./route/loginRouter.js";
import { mongodbConnect } from "./config/mongoDb.js";

// config dot env
dotenv.config();
const PORT = process.env.PORT;

// init express
const app = express();

//static foulder
app.use(express.static("public"));
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routing
app.use(studentRouter);
app.use(libraryRouter);
app.use(RegRouter);
app.use(loginRouter);

// server listen
app.listen(PORT, () => {
  mongodbConnect();
  console.log(`Port is running on ${PORT}`.bgGreen.black);
});
