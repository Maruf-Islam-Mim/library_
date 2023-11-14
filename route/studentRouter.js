import express from "express";
import {
  addStudent,
  editData,
  getAllData,
  singleData,
} from "../controller/studentController.js";
import { studentMulter } from "../util/multer.js";

// init router
const router = express.Router();

// set routers
router.get("/student", getAllData);
router.get("/student/:id", singleData);
router.post("/student", studentMulter, addStudent);
router.patch("/student/:id", editData);

// export defalut
export default router;
